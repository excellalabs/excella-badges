import { Test, TestingModule } from '@nestjs/testing';
import { SkillLevelController } from './skilllevel.controller';

describe('SkillLevelController', () => {
  let controller: SkillLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillLevelController],
    }).compile();

    controller = module.get<SkillLevelController>(SkillLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
