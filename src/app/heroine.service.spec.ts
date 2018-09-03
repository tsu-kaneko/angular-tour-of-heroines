import { TestBed, inject } from '@angular/core/testing';

import { HeroineService } from './heroine.service';

describe('HeroineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroineService]
    });
  });

  it('should be created', inject([HeroineService], (service: HeroineService) => {
    expect(service).toBeTruthy();
  }));
});
