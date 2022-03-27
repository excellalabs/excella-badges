import{ IsString  } from 'class-validator'
// import { CategoryDto } from '../category/dtos/category.dto';

export class CreateSkillLevelDto {
    @IsString()
    name: string;

    // category: CategoryDto
}