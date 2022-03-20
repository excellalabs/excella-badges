/// <reference types="multer" />
import { BadgeService } from './badge.service';
import { CreateBadgeDto } from './dtos/create-badge.dto';
import { UpdateBadgeDto } from './dtos/update-badge.dto';
export declare class BadgeController {
    private badgeService;
    constructor(badgeService: BadgeService);
    findOne(id: number): Promise<import("./badge").Badge>;
    findByName(name: string): Promise<import("./badge").Badge[]>;
    findAll(): Promise<import("./badge").Badge[]>;
    create(createDto: CreateBadgeDto): Promise<import("./badge").Badge>;
    addIcon(id: string, file: Express.Multer.File): Promise<import("../common/imageUpload/imageUpload").default>;
    update(id: string, body: UpdateBadgeDto): void;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
