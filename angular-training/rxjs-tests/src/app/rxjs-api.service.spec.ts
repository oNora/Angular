import { TestBed, inject } from '@angular/core/testing';

import { RxjsApiService } from './rxjs-api.service';

describe('RxjsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxjsApiService]
    });
  });

  it('should be created', inject([RxjsApiService], (service: RxjsApiService) => {
    expect(service).toBeTruthy();
  }));
});
