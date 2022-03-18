import { CapabilityService } from './capability.service';
import { CreateCapabilityDto } from './dtos/create-capability.dto';
import { UpdateCapabilityDto } from './dtos/update-capability.dto';
export declare class CapabilityController {
    private capabilityService;
    constructor(capabilityService: CapabilityService);
    findOne(id: number): Promise<import("./capability").Capability>;
    findByName(name: string): Promise<import("./capability").Capability[]>;
    findAll(): Promise<import("./capability").Capability[]>;
    create(createDto: CreateCapabilityDto): Promise<import("./capability").Capability>;
    update(id: string, body: UpdateCapabilityDto): void;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
