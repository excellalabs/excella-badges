import { Expose } from "class-transformer";
import { SkillDto } from "../../skill/dtos/skill.dto";
import { BadgeTypeDto } from '../../badgetype/dtos/badgetype.dto';
import { BadgeRequirement } from '../badgerequirements/badgerequirement';

export class BadgeDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    public icon?: string;

    @Expose()
    public image?: string;

    @Expose()
    public requirements: BadgeRequirement[]

    @Expose()
    skill: SkillDto;

    @Expose()
    badgeType: BadgeTypeDto
}