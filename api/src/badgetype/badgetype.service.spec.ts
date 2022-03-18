import { Test, TestingModule } from '@nestjs/testing';
import { BadgeTypeService } from './badgetype.service';

describe('BadgeTypeService', () => {
  let service: BadgeTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BadgeTypeService],
    }).compile();

    service = module.get<BadgeTypeService>(BadgeTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
