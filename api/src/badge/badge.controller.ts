import { Controller, Get, Patch, Delete, Body, Param, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BadgeService } from './badge.service';
import { CreateBadgeDto } from './dtos/create-badge.dto';
import { UpdateBadgeDto } from './dtos/update-badge.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { UploadFileDto } from './dtos/uploadfile.dto';
import { BadgeRequirementService } from './badgerequirements/badgerequirement.service';
import { CreateBadgeRequirementDto } from './badgerequirements/dtos/create-badgerequirement.dto';
import { UpdateBadgeRequirementDto } from './badgerequirements/dtos/update-badgerequirement.dto';

// badge Routes					

@Controller('badge')
export class BadgeController {
    constructor(private badgeService: BadgeService, private badgeRequirementService: BadgeRequirementService){}

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
         console.log("creating new badge ",createDto)
         return await this.badgeService.create(createDto)
     }

     @Post('/:id/icon')
     @UseInterceptors(FileInterceptor('file'))
    addIcon(@Param('id') id: string, @Body() body: UploadFileDto, @UploadedFile() file: Express.Multer.File) {
        console.log("id = ",id)
        console.log("body = ",body)
        console.log("file = ",file)
    //      console.log("uploading file: ",file)
    //    return this.badgeService.createIcon(parseInt(id), file.buffer, file.originalname);
     }

    /**
     * Updates an existing category
     * @param id
     * @param body
     */
     @Patch('/:id')
     async update(@Param('id') id: string, @Body() body: UpdateBadgeDto){
         console.log("body = ",body)
         return await this.badgeService.update(parseInt(id), body);
     }

    /**
     * Deletes a category
     * @param id
     */
     @Delete('/:id')
     delete(@Param('id') id: string) {
         return this.badgeService.remove(parseInt(id));
     }

    //Badge Requirements
    //==================================================

    //get all requirements for a given badge
    @Get('/:badgeid/requirements')
    findAllRequirements(@Param('badgeid') badgeid: string) {
        return this.badgeRequirementService.findAll(parseInt(badgeid));
    }

    //get a single requirement for a given badge
    @Get('/:badgeid/requirement/:id')
    findRequirement(@Param('badgeid') badgeid: string, @Param('id') id: string) {
        //use badge id to double check that the requirement you're querying is associated to the badge
        return this.badgeRequirementService.findOne(parseInt(id));
    }

    //create
    @Post('/:badgeid/requirement')
     async createRequirement(@Param('badgeid') badgeid: string, @Body() createDto: CreateBadgeRequirementDto) {
        //use badge id to double check that the requirement you're creating is associated to the badge
        return this.badgeService.findOne(parseInt(badgeid)).then(badge => {
            createDto.badge = badge
            return this.badgeRequirementService.create(createDto)
        })
    }

    //update
    @Patch('/:badgeid/requirement/:id')
    async updateRequirement(
        @Param('badgeid') badgeid: string, 
        @Param('id') id: string, 
        @Body() updateDto: UpdateBadgeRequirementDto
        ) {
            console.log("retrieving requirements for badge = ",badgeid)
            console.log("id = ",id)
            console.log("update dto = ",updateDto)
        console.log("update obj = ",updateDto)
        return await this.badgeRequirementService.update(parseInt(id), updateDto);
    } 

    //delete
    @Delete('/:badgeid/requirement/:id')
    async deleteRequirement(@Param() params) {
        return await this.badgeRequirementService.remove(parseInt(params.id));
    }
}
