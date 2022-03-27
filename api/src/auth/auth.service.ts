import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { CreateUserDto } from '../user/dtos/create-user.dto'

const scrypt = promisify(_scrypt);


@Injectable()
export class AuthService {
    constructor(private usersService: UserService){}

    async signup(email: string, password: string){
        // See if email is in use
        const users = await this.usersService.findByEmail(email)
        if(users.length){
            throw new BadRequestException('email already in use')
        }
        // Hash users password
        const salt = randomBytes(8).toString('hex');
        const hash = (await scrypt(password, salt, 32)) as Buffer;
        const result = salt + '.' + hash.toString('hex');
        
        // Create new user and save
        return await this.usersService.create(new CreateUserDto(email, result))
    }

    /**
     * Authenticate user by email and password
     * @param email 
     * @param password 
     */
    async authenticate(email: string, password: string){
        const [user] = await this.usersService.findByEmail(email);
        if(!user) {
            throw new NotFoundException('user not found')
        }

        const [salt, storedHash] = user.password.split('.');

        const hash = (await scrypt(password, salt, 32)) as Buffer;

        if(storedHash !== hash.toString('hex')) {
            throw new BadRequestException('invalid password for this user')
        }
            
        return user;
    }
}
