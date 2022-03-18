import { Controller, Session, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BadgeTypeService } from './badgetype.service';
import { CreateBadgeTypeDto } from './dtos/create-badgetype.dto';
import { UpdateBadgeTypeDto } from './dtos/update-badgetype.dto';

// badgetype Routes					

@Controller('badgetype')
export class BadgeTypeController {
    constructor(private badgeTypeService: BadgeTypeService){}

    /**
     * Get the badgetype by id
     * @param id: badgetype id
     * @returns badgetype
     */
    @Get('/id/:id')
    findOne(@Param('id') id: number){
     return this.badgeTypeService.findOne(id);
    }

    /**
    * Get the badgetype by id
    * @param id: badgetype id
    * @returns badgetype
    */
    @Get('/name/:name')
    findByName(@Param('name') name: string){
        console.log("finding by name")
         return this.badgeTypeService.findByName(name);
    }

    /**
     * Get the badgetype by id
     * @returns badgetype[]
     */
    @Get()
    findAll() {
        return this.badgeTypeService.findAll();
    }

    /**
     * Creates a new category
     * @param body
     */
     @Post()
     async create(@Body() createDto: CreateBadgeTypeDto) {
         return await this.badgeTypeService.create(createDto)
     }

    /**
     * Updates an existing category
     * @param id
     * @param body
     */
     @Patch('/:id')
     update(@Param('id') id: string, @Body() body: UpdateBadgeTypeDto){
         this.badgeTypeService.update(parseInt(id), body);
     }

    /**
     * Deletes a category
     * @param id
     */
     @Delete('/:id')
     delete(@Param('id') id: string) {
         return this.badgeTypeService.remove(parseInt(id));
     }
}
