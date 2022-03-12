import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>){
        this.repo = repo;
    }

    create(email: string, password: string) {
        const user = this.repo.create({ email, password });
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
