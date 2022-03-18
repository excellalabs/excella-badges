import { BadgeTypeService } from './badgetype.service';
import { CreateBadgeTypeDto } from './dtos/create-badgetype.dto';
import { UpdateBadgeTypeDto } from './dtos/update-badgetype.dto';
export declare class BadgeTypeController {
    private badgeTypeService;
    constructor(badgeTypeService: BadgeTypeService);
    findOne(id: number): Promise<import("./badgetype").BadgeType>;
    findByName(name: string): Promise<import("./badgetype").BadgeType[]>;
    findAll(): Promise<import("./badgetype").BadgeType[]>;
    create(createDto: CreateBadgeTypeDto): Promise<import("./badgetype").BadgeType>;
    update(id: string, body: UpdateBadgeTypeDto): void;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
