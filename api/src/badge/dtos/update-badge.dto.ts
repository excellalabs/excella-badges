import { Expose } from "class-transformer";
import{ IsNotEmpty } from 'class-validator'
import { SkillDto } from '../../skill/dtos/skill.dto';
import { BadgeTypeDto } from '../../badgetype/dtos/badgetype.dto';

export class UpdateBadgeDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    @IsNotEmpty()
    skill: SkillDto;

    @Expose()
    @IsNotEmpty()
    badgeType: BadgeTypeDto
}