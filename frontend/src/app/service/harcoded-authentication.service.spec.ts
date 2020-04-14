import { TestBed } from '@angular/core/testing';

import { HarcodedAuthenticationService } from './harcoded-authentication.service';

describe('HarcodedAuthenticationService', () => {
  let service: HarcodedAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarcodedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
