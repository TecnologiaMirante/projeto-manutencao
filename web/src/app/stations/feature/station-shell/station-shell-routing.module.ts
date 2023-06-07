import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    loadChildren: () =>
      import('../station-list/station-list.module').then(
        (m) => m.StationListModule
      )    
  },
  {
    path: ':id/detail',
    loadChildren: () =>
      import('../station-detail/station-detail.module').then(
        (m) => m.StationDetailModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationShellRoutingModule { }
