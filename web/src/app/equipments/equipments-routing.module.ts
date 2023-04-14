import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create'
    },
    {
        path: 'equipments',
        loadChildren: () =>
         import('../equipments/feature/equipments-shell/equipments-shell.module').then(
            (m) => m.EquipmentsShellModule
         )
    }
]

@NgModule({
    imports: [],
    exports: []
})
export class EquipmentsRoutingModule {}