import { TestBed } from '@angular/core/testing';

import { KctService } from './kct.service';

describe('KctService', () => {
  let service: KctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
