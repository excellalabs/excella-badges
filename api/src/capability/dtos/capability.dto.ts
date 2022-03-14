import { Expose } from "class-transformer";
import { CategoryDto } from 'src/category/dtos/category.dto';

export class CapabilityDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    category: CategoryDto;
}