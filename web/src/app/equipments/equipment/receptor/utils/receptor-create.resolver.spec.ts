import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { receptorCreateResolver } from './receptor-create.resolver';

describe('receptorCreateResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => receptorCreateResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
