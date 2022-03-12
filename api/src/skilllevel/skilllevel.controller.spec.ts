import { Test, TestingModule } from '@nestjs/testing';
import { SkilllevelController } from './skilllevel.controller';

describe('SkilllevelController', () => {
  let controller: SkilllevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkilllevelController],
    }).compile();

    controller = module.get<SkilllevelController>(SkilllevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
