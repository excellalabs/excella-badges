import { Expose } from "class-transformer";
import { IsOptional } from "class-validator";

export class UpdateCategoryDto {
    @Expose()
    id: number;

    @Expose()
    @IsOptional()
    name: string
}