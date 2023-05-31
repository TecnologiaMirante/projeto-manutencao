import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Station } from '../../data-access/station';
import { inject } from '@angular/core';
import { StationsService } from '../../data-access/stations.service';

export const stationsListResolver: ResolveFn<Station[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(StationsService).list();
};
