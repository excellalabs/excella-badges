import { Repository } from 'typeorm';
import { Capability } from './capability';
import { CreateCapabilityDto } from './dtos/create-capability.dto';
import { UpdateCapabilityDto } from './dtos/update-capability.dto';
export declare class CapabilityService {
    private repo;
    constructor(repo: Repository<Capability>);
    findOne(id: number): Promise<Capability>;
    findByName(name: string): Promise<Capability[]>;
    findAll(): Promise<Capability[]>;
    create(newCapability: CreateCapabilityDto): Promise<Capability>;
    update(id: number, attrs: Partial<UpdateCapabilityDto>): Promise<Capability>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
