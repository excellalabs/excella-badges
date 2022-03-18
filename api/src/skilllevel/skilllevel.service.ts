import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillLevel } from './skilllevel';
import { CreateSkillLevelDto } from './dtos/create-skilllevel.dto'
import { UpdateSkillLevelDto } from './dtos/update-skilllevel.dto';

@Injectable()
export class SkillLevelService {
    constructor(@InjectRepository(SkillLevel) private repo: Repository<SkillLevel>){
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

    async create(newSkillLevel: CreateSkillLevelDto) {
        return this.repo.save(this.repo.create(newSkillLevel));
    }
    
    async update(id: number, attrs: Partial<UpdateSkillLevelDto>) {
        const skillLevel = await this.findOne(id)
        if(!skillLevel){
            console.error('Update: skill level not found')
            return null
        }
        Object.assign(skillLevel, attrs);
        skillLevel.id = id
        return this.repo.save(skillLevel);
    }

    async remove(id: number){
        const skillLevel = await this.findOne(id);
        if(!skillLevel){
            console.error('Update: skill level not found')
            return null
        }
        return this.repo.delete(id);
    }
}
