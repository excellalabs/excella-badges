import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadgeType } from './badgetype';
import { CreateBadgeTypeDto } from './dtos/create-badgetype.dto'
import { UpdateBadgeTypeDto } from './dtos/update-badgetype.dto';

@Injectable()
export class BadgeTypeService {
    constructor(@InjectRepository(BadgeType) private repo: Repository<BadgeType>){
        this.repo = repo;
    }

    findOne(id: number){
        if(!id)
            return null;
        return this.repo.findOne(id);
    }

    findByName(name: string){
        return this.repo.find({ name });
    }
    
    findAll(){
        return this.repo.find();
    }

    async create(newBadgeType: CreateBadgeTypeDto) {
        return this.repo.save(this.repo.create(newBadgeType));
    }
    
    async update(id: number, attrs: Partial<UpdateBadgeTypeDto>) {
        const badgetype = await this.findOne(id)
        if(!badgetype){
            console.error('Update: Badge Type not found')
            return null
        }
        Object.assign(badgetype, attrs);
        badgetype.id = id
        return this.repo.save(badgetype);
    }

    async remove(id: number){
        const badgetype = await this.findOne(id);
        if(!badgetype){
            console.error('Update: Badge Type not found')
            return null
        }
        return this.repo.delete(id);
    }
}
