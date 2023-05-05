import { TestBed } from '@angular/core/testing';

import { ExaustorService } from './exaustor.service';

describe('ExaustorService', () => {
  let service: ExaustorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaustorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
