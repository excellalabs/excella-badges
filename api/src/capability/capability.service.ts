import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Capability } from './capability';
import { CreateCapabilityDto } from './dtos/create-capability.dto'

@Injectable()
export class CapabilityService {
    constructor(@InjectRepository(Capability) private repo: Repository<Capability>){
        this.repo = repo;
    }

    async create(newCapability: CreateCapabilityDto) {
        return this.repo.save(this.repo.create(newCapability));
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

    async remove(id: number){
        const capability = await this.findOne(id);
        if(!capability){
            console.error('Update: capability not found')
            return null
        }
        return this.repo.delete(id);
    }
}
