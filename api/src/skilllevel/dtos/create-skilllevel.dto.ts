import{ IsString  } from 'class-validator'
// import { CategoryDto } from 'src/category/dtos/category.dto';

export class CreateSkillLevelDto {
    @IsString()
    name: string;

    // category: CategoryDto
}