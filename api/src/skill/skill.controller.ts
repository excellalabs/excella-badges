import { Controller, Session, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkillDto } from './dtos/create-skill.dto';
import { UpdateSkillDto } from './dtos/update-skill.dto';

// SkillLevel Routes					

@Controller('skill')
export class SkillController {
    constructor(private skillService: SkillService){}

    /**
     * Get the skilllevel by id
     * @param id: SkillLevel id
     * @returns SkillLevel
     */
    @Get('/id/:id')
    findOne(@Param('id') id: number){
     return this.skillService.findOne(id);
    }

    /**
    * Get the skilllevel by id
    * @param id: SkillLevel id
    * @returns SkillLevel
    */
    @Get('/name/:name')
    findByName(@Param('name') name: string){
         return this.skillService.findByName(name);
    }

/**
    * Get the skilllevel by id
    * @param id: SkillLevel id
    * @returns SkillLevel
    */
    @Get('/capability/:id')
    findByCapability(@Param('id') id: number){
        return this.skillService.findByCapability(id)
    }

    /**
    * Get the skilllevel by id
    * @param id: SkillLevel id
    * @returns SkillLevel
    */
     @Get('/skilllevel/:id')
     findBySkillLevel(@Param('id') id: number){
         return this.skillService.findBySkillLevel(id)
     }

    /**
     * Get the skilllevel by id
     * @returns SkillLevel[]
     */
    @Get()
    findAll() {
        return this.skillService.findAll();
    }

    /**
     * Creates a new category
     * @param body
     */
     @Post()
     async create(@Body() createDto: CreateSkillDto) {
         console.log(createDto);
         return await this.skillService.create(createDto)
     }

    /**
     * Updates an existing category
     * @param id
     * @param body
     */
     @Patch('/:id')
     update(@Param('id') id: string, @Body() body: UpdateSkillDto){
         this.skillService.update(parseInt(id), body);
     }

    /**
     * Deletes a category
     * @param id
     */
     @Delete('/:id')
     delete(@Param('id') id: string) {
         return this.skillService.remove(parseInt(id));
     }
}
