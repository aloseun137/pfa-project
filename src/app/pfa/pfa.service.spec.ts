import { TestBed } from '@angular/core/testing';

import { PfaService } from './pfa.service';

describe('PfaService', () => {
  let service: PfaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PfaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
