import { Expose } from "class-transformer";
// import { CategoryDto } from 'src/category/dtos/category.dto';

export class BadgeTypeDto {
    @Expose()
    id: number;

    @Expose()
    name: string;
}