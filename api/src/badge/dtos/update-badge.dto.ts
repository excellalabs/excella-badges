import { Expose } from "class-transformer";
import{ IsNotEmpty } from 'class-validator'
import { SkillDto } from 'src/skill/dtos/skill.dto';
import { BadgeTypeDto } from 'src/badgetype/dtos/badgetype.dto';

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