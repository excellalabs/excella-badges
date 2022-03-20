/// <reference types="node" />
import { Repository } from 'typeorm';
import { Badge } from './badge';
import { CreateBadgeDto } from './dtos/create-badge.dto';
import { UpdateBadgeDto } from './dtos/update-badge.dto';
import ImageUploadService from '../common/imageUpload/imageUpload.service';
export declare class BadgeService {
    private repo;
    private readonly imageUploadService;
    constructor(repo: Repository<Badge>, imageUploadService: ImageUploadService);
    createIcon(badgeId: number, imageBuffer: Buffer, filename: string): Promise<import("../common/imageUpload/imageUpload").default>;
    createImage(badgeId: number, imageBuffer: Buffer, filename: string): Promise<import("../common/imageUpload/imageUpload").default>;
    findOne(id: number): Promise<Badge>;
    findByName(name: string): Promise<Badge[]>;
    findAll(): Promise<Badge[]>;
    create(newBadge: CreateBadgeDto): Promise<Badge>;
    update(id: number, attrs: Partial<UpdateBadgeDto>): Promise<Badge>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
