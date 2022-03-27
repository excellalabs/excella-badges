import { Exclude, Expose } from "class-transformer";
import { Skill } from '../../skill/skill';

export class CapabilityDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Exclude()
    skill: Skill[]
    // @Expose()
    // category: CategoryDto;
}