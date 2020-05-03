import { TestBed } from '@angular/core/testing';

import { DuckFeedServiceService } from './duck-feed-service.service';

describe('DuckFeedServiceService', () => {
  let service: DuckFeedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuckFeedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
