import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ParabolicaService } from '../../../parabolica/data-access/parabolica.service';
import { Parabolica } from '../../../parabolica/data-access/parabolica';

export const receptorGetParabolicasResolver: ResolveFn<Parabolica[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(ParabolicaService).list();
};