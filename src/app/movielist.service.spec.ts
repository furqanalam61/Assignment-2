import { TestBed } from '@angular/core/testing';

import { MovielistService } from './movielist.service';

describe('MovielistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovielistService = TestBed.get(MovielistService);
    expect(service).toBeTruthy();
  });
});
