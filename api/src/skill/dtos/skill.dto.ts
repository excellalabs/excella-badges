import { Expose } from "class-transformer";
import { CapabilityDto } from '../../capability/dtos/capability.dto'
import { SkillLevelDto } from '../../skilllevel/dtos/skilllevel.dto'

export class SkillDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    capability: CapabilityDto;

    @Expose()
    skilllevel: SkillLevelDto
}