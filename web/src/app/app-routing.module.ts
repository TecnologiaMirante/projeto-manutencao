import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'equipments',
    loadChildren: () =>
      import('./equipments/equipments.module').then(m => m.EquipmentsModule)
  },
  {
    path: 'stations',
    loadChildren: () =>
      import('./stations/feature/stations-shell/stations-shell.module').then(
        (m) => m.StationsShellModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
