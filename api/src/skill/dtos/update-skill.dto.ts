import { Expose } from "class-transformer";
import { IsOptional } from "class-validator";
import { CapabilityDto } from 'src/capability/dtos/capability.dto'
import { SkillLevelDto } from 'src/skilllevel/dtos/skilllevel.dto'

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