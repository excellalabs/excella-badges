import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateCategoryDto } from './dtos/create-category.dto';
import { Category } from './category';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private repo: Repository<Category>){
        this.repo = repo;
    }

    async create(newCategory: CreateCategoryDto) {
        return this.repo.save(this.repo.create(newCategory));
    }

    findOne(id: number){
        if(!id)
            return null;
        return this.repo.findOne(id);
    }

    findByName(name: string){
        return this.repo.find({ name });
    }

    findAll(){
        return this.repo.find();
    }

    async update(id: number, attrs: Partial<Category>) {
        const category = await this.findOne(id)
        if(!category){
            console.error('Update: category not found')
            return null
        }
        Object.assign(category, attrs);
        category.id = id
        return this.repo.save(category);
    }

    async remove(id: number){
        const category = await this.findOne(id);
        if(!category){
            console.error('Update: category not found')
            return null
        }
        return this.repo.delete(id);
    }
}
