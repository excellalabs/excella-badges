import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Badge } from './badge';
import { CreateBadgeDto } from './dtos/create-badge.dto'
import { UpdateBadgeDto } from './dtos/update-badge.dto';

@Injectable()
export class BadgeService {
    constructor(
        @InjectRepository(Badge) 
        private repo: Repository<Badge>
        ){
        this.repo = repo;
    }

    findOne(id: number){
        if(!id)
            return null;
        return this.repo.findOne({ where: {id: id}, relations: ['badgeType', 'skill']});
    }

    findByName(name: string){
        return this.repo.find({ where: {name: name}, relations: ['badgeType', 'skill']});
    }
    
    findAll(){
        return this.repo.find(
            {
                join: {
                    alias: "badge",
                    leftJoinAndSelect: {
                        badgeType: "badge.badgeType",
                        skill: "badge.skill",
                    },
                },
            }
        );
    }

    async create(newBadge: CreateBadgeDto) {
        return this.repo.save(this.repo.create(newBadge));
    }
    
    async update(id: number, attrs: Partial<UpdateBadgeDto>) {
        const badge = await this.findOne(id)
        console.log("found badge = ",badge)
        if(!badge){
            console.error('Update: Badge not found')
            return null
        }
        Object.assign(badge, attrs);
        badge.id = id
        console.log("updating badge = ",badge)
        return this.repo.save(badge);
    }

    async remove(id: number){
        const badge = await this.findOne(id);
        if(!badge){
            console.error('Update: Badge not found')
            return null
        }
        return this.repo.delete(id);
    }
}
