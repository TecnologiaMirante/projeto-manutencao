import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getAntenasResolver } from './get-antenas.resolver';

describe('getAntenasResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getAntenasResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
