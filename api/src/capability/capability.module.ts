
import { Module } from '@nestjs/common';
import { CapabilityController } from './capability.controller';
import { CapabilityService } from './capability.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Capability } from './capability';

@Module({
  imports: [TypeOrmModule.forFeature([Capability])],
  controllers: [CapabilityController],
  providers: [CapabilityService]
})
export class CapabilityModule {}
