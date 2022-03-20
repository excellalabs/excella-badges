import { Exclude } from 'class-transformer';
import{ IsString  } from 'class-validator'
import { Skill } from 'src/skill/skill';

export class CreateCapabilityDto {
    @IsString()
    name: string;

    @Exclude()
    skill: Skill[]
    // category: CategoryDto
}