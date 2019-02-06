import { TestBed } from '@angular/core/testing';

import { LinksStateService } from './links-state.service';

describe('LinksStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinksStateService = TestBed.get(LinksStateService);
    expect(service).toBeTruthy();
  });
});
