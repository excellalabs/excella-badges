import { TestBed } from '@angular/core/testing';

import { BadgeRequirementService } from './badgerequirement.service';

describe('BadgeRequirementService', () => {
  let service: BadgeRequirementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadgeRequirementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
