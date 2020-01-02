/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AltertifyService } from './altertify.service';

describe('Service: Altertify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AltertifyService]
    });
  });

  it('should ...', inject([AltertifyService], (service: AltertifyService) => {
    expect(service).toBeTruthy();
  }));
});
