import { Test, TestingModule } from '@nestjs/testing';
import { BadgeRequirementService } from './badgerequirement.service';

describe('BadgeRequirementService', () => {
  let service: BadgeRequirementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BadgeRequirementService],
    }).compile();

    service = module.get<BadgeRequirementService>(BadgeRequirementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
