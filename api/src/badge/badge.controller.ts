import { Controller, Get, Patch, Delete, Body, Param, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { CreateBadgeDto } from './dtos/create-badge.dto';
import { UpdateBadgeDto } from './dtos/update-badge.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

// badge Routes					

@Controller('badge')
export class BadgeController {
    constructor(private badgeService: BadgeService){}

    /**
     * Get the badge by id
     * @param id: badge id
     * @returns badge
     */
    @Get('/id/:id')
    findOne(@Param('id') id: number){
     return this.badgeService.findOne(id);
    }

    /**
    * Get the badge by id
    * @param id: badge id
    * @returns badge
    */
    @Get('/name/:name')
    findByName(@Param('name') name: string){
        console.log("finding by name")
         return this.badgeService.findByName(name);
    }

    /**
     * Get the badge by id
     * @returns badge[]
     */
    @Get()
    findAll() {
        return this.badgeService.findAll();
    }

    /**
     * Creates a new category
     * @param body
     */
     @Post()
     async create(@Body() createDto: CreateBadgeDto) {
         return await this.badgeService.create(createDto)
     }

     @Post('/:id/icon')
     @UseInterceptors(FileInterceptor('file'))
     async addIcon(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
         console.log("uploading file: ",file)
       return this.badgeService.createIcon(parseInt(id), file.buffer, file.originalname);
     }

    /**
     * Updates an existing category
     * @param id
     * @param body
     */
     @Patch('/:id')
     update(@Param('id') id: string, @Body() body: UpdateBadgeDto){
         this.badgeService.update(parseInt(id), body);
     }

    /**
     * Deletes a category
     * @param id
     */
     @Delete('/:id')
     delete(@Param('id') id: string) {
         return this.badgeService.remove(parseInt(id));
     }
}
