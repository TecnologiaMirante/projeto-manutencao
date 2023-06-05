import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Antena } from '../../../antena/data-access/antena';
import { AntenaService } from '../../../antena/data-access/antena.service';

export const getAntenasResolver: ResolveFn<Antena[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AntenaService).list();
};
