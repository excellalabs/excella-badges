import { TestBed } from '@angular/core/testing';

import { CapabilityService } from './capability.service';

describe('CapabilityService', () => {
  let service: CapabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
