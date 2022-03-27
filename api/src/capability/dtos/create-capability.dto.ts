import { Exclude } from 'class-transformer';
import{ IsString  } from 'class-validator'
import { Skill } from '../../skill/skill';

export class CreateCapabilityDto {
    @IsString()
    name: string;

    @Exclude()
    skill: Skill[]
    // category: CategoryDto
}