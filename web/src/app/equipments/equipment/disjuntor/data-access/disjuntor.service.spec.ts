import { TestBed } from '@angular/core/testing';

import { DisjuntorService } from './disjuntor.service';

describe('DisjuntorService', () => {
  let service: DisjuntorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisjuntorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
