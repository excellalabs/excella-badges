import { Expose } from "class-transformer";
import { IsOptional } from "class-validator";
// import { CategoryDto } from '../category/dtos/category.dto';

export class UpdateSkillLevelDto {
    @Expose()
    id: number;

    @Expose()
    @IsOptional()
    name: string

    // @Expose()
    // @IsOptional()
    // category: CategoryDto
}