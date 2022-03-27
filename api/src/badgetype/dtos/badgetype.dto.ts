import { Expose } from "class-transformer";
// import { CategoryDto } from '../category/dtos/category.dto';

export class BadgeTypeDto {
    @Expose()
    id: number;

    @Expose()
    name: string;
}