import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Receptor } from '../../../receptor/data-access/receptor';
import { ReceptorService } from '../../../receptor/data-access/receptor.service';

export const getReceptoresResolver: ResolveFn<Receptor[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(ReceptorService).list();
};
