import { Expose } from "class-transformer";
import { SkillDto } from "../../skill/dtos/skill.dto";
import { BadgeTypeDto } from '../../badgetype/dtos/badgetype.dto';

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