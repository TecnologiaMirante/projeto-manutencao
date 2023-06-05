import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getReceptoresResolver } from './get-receptores.resolver';

describe('getReceptoresResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getReceptoresResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
