import { CapabilityService } from './capability.service';
import { CreateCapabilityDto } from './dtos/create-capability.dto';
export declare class CapabilityController {
    private capabilityService;
    constructor(capabilityService: CapabilityService);
    create(newCapability: CreateCapabilityDto): Promise<import("./capability").Capability>;
    getAllCapabilities(): Promise<import("./capability").Capability[]>;
    removeUser(id: string): Promise<import("typeorm").DeleteResult>;
}
