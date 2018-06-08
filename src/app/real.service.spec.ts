import { TestBed, inject } from '@angular/core/testing';

import { RealService } from './real.service';

describe('RealService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealService]
    });
  });

  it('should be created', inject([RealService], (service: RealService) => {
    expect(service).toBeTruthy();
  }));
});
