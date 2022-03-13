import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { CategoryService } from './category.service';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    create(newCategory: CreateCategoryDto): Promise<import("./category").Category>;
    getAllUsers(): Promise<import("./category").Category[]>;
    getUserById(id: number): Promise<import("./category").Category>;
    getUserByEmail(name: string): Promise<import("./category").Category[]>;
    removeUser(id: string): Promise<import("typeorm").DeleteResult>;
    updateUser(id: string, body: UpdateCategoryDto): void;
}
