import{ IsString  } from 'class-validator'
// import { CategoryDto } from '../category/dtos/category.dto';

export class CreateBadgeTypeDto {
    @IsString()
    name: string;
}