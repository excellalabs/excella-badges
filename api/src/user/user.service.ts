import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user';
import { CreateUserDto } from './dtos/create-user.dto'
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>){
        this.repo = repo;
    }

    async create(newUser: CreateUserDto) {
        const salt = randomBytes(8).toString('hex');
        const hash = (await scrypt(newUser.password, salt, 32)) as Buffer;
        const hashedPassword = salt + '.' + hash.toString('hex');
        newUser.password = hashedPassword

        const user = this.repo.create(newUser);
        return this.repo.save(user)
    }

    findOne(id: number){
        if(!id)
            return null;
        return this.repo.findOne(id);
    }

    findByEmail(email: string){
        return this.repo.find({ email });
    }

    findAll(){
        return this.repo.find();
    }

    async update(id: number, attrs: Partial<User>) {
        const user = await this.findOne(id)
        if(!user){
            console.error('Update user: user not found')
            return null
        }
        Object.assign(user, attrs);
        user.id = id
        return this.repo.save(user);
    }

    async remove(id: number){
        const user = await this.findOne(id);
        if(!user){
            console.error('Update user: user not found')
            return null
        }
        return this.repo.delete(id);
    }
}
