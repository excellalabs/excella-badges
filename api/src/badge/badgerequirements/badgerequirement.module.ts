
import { Module } from '@nestjs/common';
import { BadgeRequirementService } from './badgerequirement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BadgeRequirement } from './badgerequirement';

@Module({
  imports: [TypeOrmModule.forFeature([BadgeRequirement])],
  controllers: [],
  providers: [BadgeRequirementService]
})
export class BadgeRequirementModule {}
