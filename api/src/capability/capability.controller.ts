import { Controller, Session, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CapabilityService } from './capability.service';
import { CreateCapabilityDto } from './dtos/create-capability.dto';
import { UpdateCapabilityDto } from './dtos/update-capability.dto';

// Capability Routes					

@Controller('capability')
export class CapabilityController {
    constructor(private capabilityService: CapabilityService){}

    /**
     * Get the capability by id
     * @param id: Capability id
     * @returns Capability
     */
    @Get('/id/:id')
    findOne(@Param('id') id: number){
     return this.capabilityService.findOne(id);
    }

    /**
    * Get the capability by id
    * @param id: Capability id
    * @returns Capability
    */
    @Get('/name/:name')
    findByName(@Param('name') name: string){
        console.log("finding by name")
         return this.capabilityService.findByName(name);
    }

    /**
     * Get the capability by id
     * @returns Capability[]
     */
    @Get()
    findAll() {
        return this.capabilityService.findAll();
    }

    /**
     * Creates a new category
     * @param body
     */
     @Post()
     async create(@Body() createDto: CreateCapabilityDto) {
         return await this.capabilityService.create(createDto)
     }

    /**
     * Updates an existing category
     * @param id
     * @param body
     */
     @Patch('/:id')
     update(@Param('id') id: string, @Body() body: UpdateCapabilityDto){
         this.capabilityService.update(parseInt(id), body);
     }

    /**
     * Deletes a category
     * @param id
     */
     @Delete('/:id')
     delete(@Param('id') id: string) {
         return this.capabilityService.remove(parseInt(id));
     }
}
