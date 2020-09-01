import { TestBed } from '@angular/core/testing';

import { GetGeoDataService } from './get-geo-data.service';

describe('GetGeoDataService', () => {
  let service: GetGeoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGeoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
