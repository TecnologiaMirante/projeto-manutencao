import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create'
    },
    {
        path: 'create',
        loadChildren: () =>
         import('../equipments/feature/equipments-shell/equipments-shell.module').then(
            (m) => m.EquipmentsShellModule
         )
    },
    {
        path: 'nobreak',
        loadChildren: () =>
            import('../equipments/equipment/nobreak/feature/nobreak-shell/nobreak-shell.module').then(
                (m) => m.NobreakShellModule
            )
    },
    {
        path: 'disjuntor',
        loadChildren: () =>
            import('../equipments/equipment/disjuntor/feature/disjuntor-shell/disjuntor-shell.module').then(
                (m) => m.DisjuntorShellModule
            )
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class EquipmentsRoutingModule {}