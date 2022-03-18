
import { Module } from '@nestjs/common';
import { BadgeTypeController } from './badgetype.controller';
import { BadgeTypeService } from './badgetype.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BadgeType } from './badgetype';

@Module({
  imports: [TypeOrmModule.forFeature([BadgeType])],
  controllers: [BadgeTypeController],
  providers: [BadgeTypeService]
})
export class BadgeTypeModule {}
