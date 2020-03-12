import { TestBed } from '@angular/core/testing';

import { ReviewsService } from './reviews.service';


describe('ReviewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewsService = TestBed.get(ReviewsService);
    expect(service).toBeTruthy();
  });
});

describe('true', () => {
  let service: ReviewsService;
  let http: null;
  beforeEach(() => { service = new ReviewsService(http);});
  it(' should return true value', () => {
    expect(service.get()).toBe('true');
  });
});
