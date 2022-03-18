import { Expose } from "class-transformer";
// import { CategoryDto } from 'src/category/dtos/category.dto';

export class SkillLevelDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    // @Expose()
    // category: CategoryDto;
}