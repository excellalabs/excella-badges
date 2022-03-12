import { Test, TestingModule } from '@nestjs/testing';
import { BadgetypeController } from './badgetype.controller';

describe('BadgetypeController', () => {
  let controller: BadgetypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BadgetypeController],
    }).compile();

    controller = module.get<BadgetypeController>(BadgetypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
