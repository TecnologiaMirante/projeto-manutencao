import { TestBed } from '@angular/core/testing';

import { TransmissorService } from './transmissor.service';

describe('TransmissorService', () => {
  let service: TransmissorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmissorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
