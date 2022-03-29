import { TestBed } from '@angular/core/testing';

import { BadgeTypeService } from './badgetype.service';

describe('BadgeTypeService', () => {
  let service: BadgeTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadgeTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
