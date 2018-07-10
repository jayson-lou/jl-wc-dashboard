import { TestBed, inject } from '@angular/core/testing';

import { WcDataService } from './wc-data.service';

describe('WcDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WcDataService]
    });
  });

  it('should be created', inject([WcDataService], (service: WcDataService) => {
    expect(service).toBeTruthy();
  }));
});
