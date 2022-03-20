import { IsOptional } from "class-validator";
import { CapabilityDto } from 'src/capability/dtos/capability.dto'
import { SkillLevelDto } from 'src/skilllevel/dtos/skilllevel.dto'

export class QuerySkillDto {
    @IsOptional()
    name: string

    @IsOptional()
    capability: CapabilityDto;

    @IsOptional()
    skilllevel: SkillLevelDto
}