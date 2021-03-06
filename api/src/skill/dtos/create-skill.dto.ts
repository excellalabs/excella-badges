import{ IsNotEmpty, IsString  } from 'class-validator'
import { Expose } from "class-transformer";
import { CapabilityDto } from '../../capability/dtos/capability.dto'
import { SkillLevelDto } from '../../skilllevel/dtos/skilllevel.dto'

export class CreateSkillDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @Expose()
    @IsNotEmpty()
    capability: CapabilityDto;

    @Expose()
    @IsNotEmpty()
    skilllevel: SkillLevelDto
}