import { TestBed } from '@angular/core/testing';

import { SkilllevelService } from './skilllevel.service';

describe('SkilllevelService', () => {
  let service: SkilllevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkilllevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
