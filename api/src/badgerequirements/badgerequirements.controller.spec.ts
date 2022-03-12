import { Test, TestingModule } from '@nestjs/testing';
import { BadgerequirementsController } from './badgerequirements.controller';

describe('BadgerequirementsController', () => {
  let controller: BadgerequirementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BadgerequirementsController],
    }).compile();

    controller = module.get<BadgerequirementsController>(BadgerequirementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
