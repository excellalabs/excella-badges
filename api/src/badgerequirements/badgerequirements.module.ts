import { Module } from '@nestjs/common';
import { BadgerequirementsController } from './badgerequirements.controller';

@Module({
  controllers: [BadgerequirementsController]
})
export class BadgerequirementsModule {}
