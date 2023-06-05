import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { receptorGetParabolicasResolver } from './receptor-get-parabolicas.resolver';

describe('receptorGetParabolicasResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => receptorGetParabolicasResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
