import { Repository } from 'typeorm';
import { Badge } from './badge';
import { CreateBadgeDto } from './dtos/create-badge.dto';
import { UpdateBadgeDto } from './dtos/update-badge.dto';
export declare class BadgeService {
    private repo;
    constructor(repo: Repository<Badge>);
    findOne(id: number): Promise<Badge>;
    findByName(name: string): Promise<Badge[]>;
    findAll(): Promise<Badge[]>;
    create(newBadge: CreateBadgeDto): Promise<Badge>;
    update(id: number, attrs: Partial<UpdateBadgeDto>): Promise<Badge>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
