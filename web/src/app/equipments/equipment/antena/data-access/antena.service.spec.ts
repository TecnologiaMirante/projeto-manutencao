import { TestBed } from '@angular/core/testing';

import { AntenaService } from './antena.service';

describe('AntenaService', () => {
  let service: AntenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
