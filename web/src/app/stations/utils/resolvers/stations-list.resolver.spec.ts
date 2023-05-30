import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { stationsListResolver } from './stations-list.resolver';

describe('stationsListResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => stationsListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
