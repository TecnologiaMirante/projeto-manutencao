import { TestBed } from '@angular/core/testing';

import { ParabolicaService } from './parabolica.service';

describe('ParabolicaService', () => {
  let service: ParabolicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParabolicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
