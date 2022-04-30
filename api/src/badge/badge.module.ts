
import { Module } from '@nestjs/common';
import { BadgeController } from './badge.controller';
import { BadgeService } from './badge.service';
import { BadgeRequirementService } from './badgerequirements/badgerequirement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Badge } from './badge';
import { BadgeRequirement } from './badgerequirements/badgerequirement';

@Module({
  imports: [TypeOrmModule.forFeature([Badge, BadgeRequirement])],
  controllers: [BadgeController],
  providers: [BadgeService, BadgeRequirementService]
})
export class BadgeModule {}
