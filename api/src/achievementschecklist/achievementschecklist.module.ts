import { Module } from '@nestjs/common';
import { AchievementschecklistController } from './achievementschecklist.controller';

@Module({
  controllers: [AchievementschecklistController]
})
export class AchievementschecklistModule {}
