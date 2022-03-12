import { Test, TestingModule } from '@nestjs/testing';
import { CapabilityController } from './capability.controller';

describe('CapabilityController', () => {
  let controller: CapabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CapabilityController],
    }).compile();

    controller = module.get<CapabilityController>(CapabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
