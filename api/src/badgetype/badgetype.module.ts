import { Module } from '@nestjs/common';
import { BadgetypeController } from './badgetype.controller';

@Module({
  controllers: [BadgetypeController]
})
export class BadgetypeModule {}
