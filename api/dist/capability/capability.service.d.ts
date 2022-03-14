import { Repository } from 'typeorm';
import { Capability } from './capability';
import { CreateCapabilityDto } from './dtos/create-capability.dto';
export declare class CapabilityService {
    private repo;
    constructor(repo: Repository<Capability>);
    create(newCapability: CreateCapabilityDto): Promise<Capability>;
    findOne(id: number): Promise<Capability>;
    findByName(name: string): Promise<Capability[]>;
    findAll(): Promise<Capability[]>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
