import { Expose } from "class-transformer";
import { SkillDto } from 'src/skill/dtos/skill.dto';
import { BadgeTypeDto } from 'src/badgetype/dtos/badgetype.dto';

export class BadgeDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    skill: SkillDto;

    @Expose()
    badgeType: BadgeTypeDto
}