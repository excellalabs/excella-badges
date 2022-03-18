import { Test, TestingModule } from '@nestjs/testing';
import { BadgeTypeController } from './badgetype.controller';

describe('BadgeTypeController', () => {
  let controller: BadgeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BadgeTypeController],
    }).compile();

    controller = module.get<BadgeTypeController>(BadgeTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
