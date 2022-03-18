import { Test, TestingModule } from '@nestjs/testing';
import { SkillLevelService } from './skilllevel.service';

describe('SkillLevelService', () => {
  let service: SkillLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkillLevelService],
    }).compile();

    service = module.get<SkillLevelService>(SkillLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
