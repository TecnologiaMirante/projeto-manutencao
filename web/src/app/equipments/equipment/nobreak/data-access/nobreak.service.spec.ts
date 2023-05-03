import { TestBed } from '@angular/core/testing';

import { NobreakService } from './nobreak.service';

describe('NobreakService', () => {
  let service: NobreakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NobreakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
