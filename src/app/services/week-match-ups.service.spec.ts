import { TestBed } from '@angular/core/testing';

import { WeekMatchUpsService } from './week-match-ups.service';

describe('WeekMatchUpsService', () => {
  let service: WeekMatchUpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekMatchUpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
