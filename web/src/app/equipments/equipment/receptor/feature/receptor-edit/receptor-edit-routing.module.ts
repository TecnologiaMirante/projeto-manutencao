import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptorEditComponent } from './receptor-edit.component';
import { receptorGetParabolicasResolver } from '../../utils/receptor-get-parabolicas/receptor-get-parabolicas.resolver';

const routes: Routes = [
  {
    path: '',
    component: ReceptorEditComponent,
    resolve: {
      parabolicas: receptorGetParabolicasResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptorEditRoutingModule { }
