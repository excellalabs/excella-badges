import { Expose } from "class-transformer";
// import { CategoryDto } from '../category/dtos/category.dto';

export class SkillLevelDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    // @Expose()
    // category: CategoryDto;
}