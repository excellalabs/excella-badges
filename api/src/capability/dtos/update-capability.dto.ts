import { Expose } from "class-transformer";
import { IsOptional } from "class-validator";
// import { CategoryDto } from 'src/category/dtos/category.dto';

export class UpdateCapabilityDto {
    @Expose()
    id: number;

    @Expose()
    @IsOptional()
    name: string

    // @Expose()
    // @IsOptional()
    // category: CategoryDto
}