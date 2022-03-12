import { Test, TestingModule } from '@nestjs/testing';
import { AchievementschecklistController } from './achievementschecklist.controller';

describe('AchievementschecklistController', () => {
  let controller: AchievementschecklistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AchievementschecklistController],
    }).compile();

    controller = module.get<AchievementschecklistController>(AchievementschecklistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
