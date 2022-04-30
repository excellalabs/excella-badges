import { Expose } from "class-transformer";
import{ IsOptional } from 'class-validator'
import { BadgeDto } from '../../dtos/badge.dto';

export class UpdateBadgeRequirementDto {
    @Expose()
    id: number;

    @Expose()
    @IsOptional()
    name: string;

    @Expose()
    @IsOptional()
    description: string;

    @Expose()
    badge: BadgeDto;
}