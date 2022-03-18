import { Controller, Session, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SkillLevelService } from './skilllevel.service';
import { CreateSkillLevelDto } from './dtos/create-skilllevel.dto';
import { UpdateSkillLevelDto } from './dtos/update-skilllevel.dto';

// SkillLevel Routes					

@Controller('skilllevel')
export class SkillLevelController {
    constructor(private skillLevelService: SkillLevelService){}

    /**
     * Get the skilllevel by id
     * @param id: SkillLevel id
     * @returns SkillLevel
     */
    @Get('/id/:id')
    findOne(@Param('id') id: number){
     return this.skillLevelService.findOne(id);
    }

    /**
    * Get the skilllevel by id
    * @param id: SkillLevel id
    * @returns SkillLevel
    */
    @Get('/name/:name')
    findByName(@Param('name') name: string){
        console.log("finding by name")
         return this.skillLevelService.findByName(name);
    }

    /**
     * Get the skilllevel by id
     * @returns SkillLevel[]
     */
    @Get()
    findAll() {
        return this.skillLevelService.findAll();
    }

    /**
     * Creates a new category
     * @param body
     */
     @Post()
     async create(@Body() createDto: CreateSkillLevelDto) {
         return await this.skillLevelService.create(createDto)
     }

    /**
     * Updates an existing category
     * @param id
     * @param body
     */
     @Patch('/:id')
     update(@Param('id') id: string, @Body() body: UpdateSkillLevelDto){
         this.skillLevelService.update(parseInt(id), body);
     }

    /**
     * Deletes a category
     * @param id
     */
     @Delete('/:id')
     delete(@Param('id') id: string) {
         return this.skillLevelService.remove(parseInt(id));
     }
}
