import { TestBed } from '@angular/core/testing';

import { DealServiceService } from './deal-service.service';

describe('DealServiceService', () => {
  let service: DealServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
