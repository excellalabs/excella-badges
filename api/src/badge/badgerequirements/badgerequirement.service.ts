import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadgeRequirement } from './badgerequirement';
import { CreateBadgeRequirementDto } from './dtos/create-badgerequirement.dto'
import { UpdateBadgeRequirementDto } from './dtos/update-badgerequirement.dto';

@Injectable()
export class BadgeRequirementService {
    constructor(
        @InjectRepository(BadgeRequirement) 
        private repo: Repository<BadgeRequirement>
        ){
        this.repo = repo;
    }

    findOne(id: number){
        if(!id)
            return null;
        return this.repo.findOne({ where: {id: id}});
    }

    findByName(name: string){
        return this.repo.find({ where: {name: name}});
    }
    
    findAll(badgeId: number){
        return this.repo.find({ where: {badge: badgeId}});
    }

    async create(badgereq: CreateBadgeRequirementDto) {
        return this.repo.save(this.repo.create(badgereq));
    }
    
    async update(id: number, attrs: Partial<UpdateBadgeRequirementDto>) {
        const badgereq = await this.findOne(id)
        console.log("found badgereq = ",badgereq)
        if(!badgereq){
            console.error('Update: badgereq not found')
            return null
        }
        Object.assign(badgereq, attrs);
        badgereq.id = id
        console.log("updating badge requirement = ",badgereq)
        return this.repo.save(badgereq);
    }

    async remove(id: number){
        const badgereq = await this.findOne(id);
        if(!badgereq){
            console.error('Update: badgereq not found')
            return null
        }
        return this.repo.delete(id);
    }
}
