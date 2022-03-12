import { Module } from '@nestjs/common';
import { CapabilityService } from './capability.service';

@Module({
  providers: [CapabilityService]
})
export class CapabilityModule {}
