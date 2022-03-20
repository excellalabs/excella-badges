import{ IsString  } from 'class-validator'
// import { CategoryDto } from 'src/category/dtos/category.dto';

export class CreateBadgeTypeDto {
    @IsString()
    name: string;
}