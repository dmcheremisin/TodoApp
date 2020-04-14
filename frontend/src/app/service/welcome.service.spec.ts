import { TestBed } from '@angular/core/testing';

import { WelcomeService } from './welcome.service';

describe('WelcomeService', () => {
  let service: WelcomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
