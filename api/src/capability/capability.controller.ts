import { Controller, Session, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CapabilityService } from './capability.service';
import { CreateCapabilityDto } from './dtos/create-capability.dto';

@Controller('capability')
export class CapabilityController {
    constructor(private capabilityService: CapabilityService){}

    @Post('/create')
    async create(@Body() newCapability: CreateCapabilityDto) {
        return await this.capabilityService.create(newCapability)
    }

    @Get()
    getAllCapabilities() {
        return this.capabilityService.findAll();
    }

         /**
      * Deletes a user
      * @param id User id
      * @returns DeleteResult
      */
          @Delete('/:id')
          removeUser(@Param('id') id: string) {
              return this.capabilityService.remove(parseInt(id));
          }
}
