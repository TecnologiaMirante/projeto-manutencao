import { TestBed } from '@angular/core/testing';

import { CombinadorService } from './combinador.service';

describe('CombinadorService', () => {
  let service: CombinadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombinadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
