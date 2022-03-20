import{ IsNotEmpty, IsString  } from 'class-validator'
import { Expose } from "class-transformer";
import { SkillDto } from 'src/skill/dtos/skill.dto';
import { BadgeTypeDto } from 'src/badgetype/dtos/badgetype.dto';

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