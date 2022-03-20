import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from './skill';
import { CreateSkillDto } from './dtos/create-skill.dto'
import { UpdateSkillDto } from './dtos/update-skill.dto';

@Injectable()
export class SkillService {
    constructor(@InjectRepository(Skill) private repo: Repository<Skill>){
        this.repo = repo;
    }

    findOne(id: number){
        if(!id)
            return null;
        return this.repo.findOne({ where: {id: id}, relations: ['capability', 'skilllevel']});
    }

    findByName(name: string){
        return this.repo.find({ where: {name: name}, relations: ['capability', 'skilllevel']});
    }

    async findByCapability(id: number){
        return this.repo.find({ where: {capability: id}, relations: ['capability', 'skilllevel']});
    }

    async findBySkillLevel(id: number){
        return this.repo.find({ where: {skilllevel: id}, relations: ['capability', 'skilllevel']});
    }

    findAll(){
        return this.repo.find(
            {
                join: {
                    alias: "skill",
                    leftJoinAndSelect: {
                        capability: "skill.capability",
                        skilllevel: "skill.skilllevel",
                    },
                },
            }
        );
    }

    async create(newSkill: CreateSkillDto) {
        return this.repo.save(this.repo.create(newSkill));
    }

        // queryByCapability(query: UpdateSkillDto){
    //     return this.repo.createQueryBuilder()
    //     .select('*')
    //     .where('capabilityId =: capabilityId', { capabilityId: query.capability.id })
    //     .getRawMany();
    // }

    async update(id: number, attrs: Partial<UpdateSkillDto>) {
        const skill = await this.findOne(id)
        if(!skill){
            console.error('Update: skill not found')
            return null
        }
        Object.assign(skill, attrs);
        skill.id = id
        return this.repo.save(skill);
    }

    async remove(id: number){
        const skill = await this.findOne(id);
        if(!skill){
            console.error('Update: skill not found')
            return null
        }
        return this.repo.delete(id);
    }
}
