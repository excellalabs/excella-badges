
import { Module } from '@nestjs/common';
import { SkillLevelController } from './skilllevel.controller';
import { SkillLevelService } from './skilllevel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillLevel } from './skilllevel';

@Module({
  imports: [TypeOrmModule.forFeature([SkillLevel])],
  controllers: [SkillLevelController],
  providers: [SkillLevelService]
})
export class SkillLevelModule {}
