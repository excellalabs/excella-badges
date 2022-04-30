import { Expose } from "class-transformer";
import{ IsOptional } from 'class-validator'
import { SkillDto } from '../../skill/dtos/skill.dto';
import { BadgeTypeDto } from '../../badgetype/dtos/badgetype.dto';
import { BadgeRequirement } from "../badgerequirements/badgerequirement";

export class UpdateBadgeDto {
    @Expose()
    id: number;

    @Expose()
    @IsOptional()
    name: string;

    @Expose()
    @IsOptional()
    icon: string;

    @Expose()
    @IsOptional()
    image: string;

    @Expose()
    requirements: BadgeRequirement[]

    @Expose()
    @IsOptional()
    skill: SkillDto;

    @Expose()
    @IsOptional()
    badgeType: BadgeTypeDto
}