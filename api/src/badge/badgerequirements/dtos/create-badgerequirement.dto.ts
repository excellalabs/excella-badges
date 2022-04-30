import{ IsNotEmpty, IsString  } from 'class-validator'
import { Expose } from "class-transformer";
import { BadgeDto } from '../../dtos/badge.dto';

export class CreateBadgeRequirementDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;

    @Expose()
    badge: BadgeDto
}