import { TestBed } from '@angular/core/testing';

import { EspnStatsService } from './espn-stats.service';

describe('EspnStatsService', () => {
  let service: EspnStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspnStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
