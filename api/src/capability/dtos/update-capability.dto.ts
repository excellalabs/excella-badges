import { Expose, Exclude } from 'class-transformer';
import { IsOptional } from "class-validator";
import { Skill } from 'src/skill/skill';

export class UpdateCapabilityDto {
    @Expose()
    id: number;

    @Expose()
    @IsOptional()
    name: string

    @Exclude()
    skill: Skill[]
    // @Expose()
    // @IsOptional()
    // category: CategoryDto
}