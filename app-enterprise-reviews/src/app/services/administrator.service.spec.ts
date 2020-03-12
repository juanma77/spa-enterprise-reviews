import { TestBed } from '@angular/core/testing';

import { AdministratorService } from './administrator.service';

describe('AdministratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministratorService = TestBed.get(AdministratorService);
    expect(service).toBeTruthy();
  });
});

describe('true', () => {
  let service: AdministratorService;
  let http: null;
  beforeEach(() => { service = new AdministratorService(http);});
  it('should return true value', () => {
    expect(service.get()).toBe('true');
  });
});
