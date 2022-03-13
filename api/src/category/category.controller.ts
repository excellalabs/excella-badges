import { Controller, Session, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Serialize } from '../interceptors/serialize.interceptor';

import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { CategoryDto } from './dtos/category.dto';
import { CategoryService } from './category.service';

@Serialize(CategoryDto)
@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}

    @Post('/create')
    async create(@Body() newCategory: CreateCategoryDto) {
        return await this.categoryService.create(newCategory)
    }
 
     /**
      * Return list of all users
      * @returns Users
      */
     @Get()
     getAllUsers() {
         return this.categoryService.findAll();
     }
 
     
     /**
      * Get the user by id
      * @param id: User id
      * @returns User
      */
     @Get('/id/:id')
     getUserById(@Param('id') id: number){
         return this.categoryService.findOne(id);
     }
 
     /**
      * Get the user by email address
      * @param email User email address
      * @returns User
      */
     @Get('/name/:name')
     getUserByEmail(@Param('name') name: string){
         return this.categoryService.findByName(name);
     }
 
     /**
      * Deletes a user
      * @param id User id
      * @returns DeleteResult
      */
     @Delete('/:id')
     removeUser(@Param('id') id: string) {
         return this.categoryService.remove(parseInt(id));
     }
 
     /**
      * Updates attributes for an existing user
      * @param id User id
      * @param body
      */
     @Patch('/:id')
     updateUser(@Param('id') id: string, @Body() body: UpdateCategoryDto){
         console.log("updating")
         this.categoryService.update(parseInt(id), body);
     }
 
}
