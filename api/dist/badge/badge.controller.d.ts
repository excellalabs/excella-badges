/// <reference types="multer" />
import { BadgeService } from './badge.service';
import { CreateBadgeDto } from './dtos/create-badge.dto';
import { UpdateBadgeDto } from './dtos/update-badge.dto';
import { UploadFileDto } from './dtos/uploadfile.dto';
import { BadgeRequirementService } from './badgerequirements/badgerequirement.service';
import { CreateBadgeRequirementDto } from './badgerequirements/dtos/create-badgerequirement.dto';
import { UpdateBadgeRequirementDto } from './badgerequirements/dtos/update-badgerequirement.dto';
export declare class BadgeController {
    private badgeService;
    private badgeRequirementService;
    constructor(badgeService: BadgeService, badgeRequirementService: BadgeRequirementService);
    findOne(id: number): Promise<import("./badge").Badge>;
    findByName(name: string): Promise<import("./badge").Badge[]>;
    findAll(): Promise<import("./badge").Badge[]>;
    create(createDto: CreateBadgeDto): Promise<import("./badge").Badge>;
    addIcon(id: string, body: UploadFileDto, file: Express.Multer.File): void;
    update(id: string, body: UpdateBadgeDto): Promise<import("./badge").Badge>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    findAllRequirements(badgeid: string): Promise<import("./badgerequirements/badgerequirement").BadgeRequirement[]>;
    findRequirement(badgeid: string, id: string): Promise<import("./badgerequirements/badgerequirement").BadgeRequirement>;
    createRequirement(badgeid: string, createDto: CreateBadgeRequirementDto): Promise<import("./badgerequirements/badgerequirement").BadgeRequirement>;
    updateRequirement(badgeid: string, id: string, updateDto: UpdateBadgeRequirementDto): Promise<import("./badgerequirements/badgerequirement").BadgeRequirement>;
    deleteRequirement(params: any): Promise<import("typeorm").DeleteResult>;
}
