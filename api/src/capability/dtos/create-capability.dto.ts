import{ IsString  } from 'class-validator'
import { CategoryDto } from 'src/category/dtos/category.dto';

export class CreateCapabilityDto {
    @IsString()
    name: string;

    category: CategoryDto;
}