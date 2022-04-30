import{ IsNotEmpty, IsString  } from 'class-validator'
import { Expose } from "class-transformer";
import { SkillDto } from '../../skill/dtos/skill.dto';
import { BadgeTypeDto } from '../../badgetype/dtos/badgetype.dto';
import { BadgeRequirement } from '../badgerequirements/badgerequirement';

export class CreateBadgeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    icon: string;

    @IsString()
    image: string;

    @Expose()
    requirements: BadgeRequirement[]

    @Expose()
    @IsNotEmpty()
    skill: SkillDto;

    @Expose()
    @IsNotEmpty()
    badgeType: BadgeTypeDto
}