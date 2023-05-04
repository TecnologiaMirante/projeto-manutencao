import { TestBed } from '@angular/core/testing';

import { ArCondicionadoService } from './ar-condicionado.service';

describe('ArCondicionadoService', () => {
  let service: ArCondicionadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArCondicionadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
