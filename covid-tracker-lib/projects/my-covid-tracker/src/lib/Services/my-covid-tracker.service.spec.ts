import { TestBed } from '@angular/core/testing';

import { MyCovidTrackerService } from './my-covid-tracker.service';

describe('MyCovidTrackerService', () => {
  let service: MyCovidTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCovidTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
