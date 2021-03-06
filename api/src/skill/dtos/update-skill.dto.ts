import { Expose } from "class-transformer";
import { IsOptional } from "class-validator";
import { CapabilityDto } from '../../capability/dtos/capability.dto'
import { SkillLevelDto } from '../../skilllevel/dtos/skilllevel.dto'

export class UpdateSkillDto {
    @Expose()
    id: number;

    @Expose()
    @IsOptional()
    name: string

    @Expose()
    @IsOptional()
    capability: CapabilityDto;

    @Expose()
    @IsOptional()
    skilllevel: SkillLevelDto
}