import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationsListComponent } from './stations-list.component';
import { stationsListResolver } from '../../utils/resolvers/stations-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: StationsListComponent,
    resolve: {
      stations: stationsListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationsListRoutingModule { }
