import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationListComponent } from './station-list.component';
import { stationsListResolver } from '../../utils/resolvers/stations-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: StationListComponent,
    resolve: {
      stations: stationsListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationListRoutingModule { }
