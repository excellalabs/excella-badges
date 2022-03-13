import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { Category } from './category';
export declare class CategoryService {
    private repo;
    constructor(repo: Repository<Category>);
    create(newCategory: CreateCategoryDto): Promise<Category>;
    findOne(id: number): Promise<Category>;
    findByName(name: string): Promise<Category[]>;
    findAll(): Promise<Category[]>;
    update(id: number, attrs: Partial<Category>): Promise<Category>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
