import{ IsNotEmpty, IsString  } from 'class-validator'
import { Expose } from "class-transformer";
import { SkillDto } from '../../skill/dtos/skill.dto';
import { BadgeTypeDto } from '../../badgetype/dtos/badgetype.dto';

export class CreateBadgeDto {
    @IsString()
    name: string;

    @Expose()
    @IsNotEmpty()
    skill: SkillDto;

    @Expose()
    @IsNotEmpty()
    badgeType: BadgeTypeDto
}