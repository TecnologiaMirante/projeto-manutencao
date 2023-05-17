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
    },
    {
        path: 'dps',
        loadChildren: () =>
            import('../equipments/equipment/dps/feature/dps-shell/dps-shell.module').then(
                (m) => m.DpsShellModule
            )
    },
    {
        path: 'ar-condicionado',
        loadChildren: () =>
            import('../equipments/equipment/ar-condicionado/feature/ar-condicionado-shell/ar-condicionado-shell.module').then(
                (m) => m.ArCondicionadoShellModule
            )

    },
    {
        path: 'switch',
        loadChildren: () =>
            import('../equipments/equipment/switch/feature/switch-shell/switch-shell-routing.module').then(
                (m) => m.SwitchShellRoutingModule
            )
    },
    {
        path: 'exaustor',
        loadChildren: () => 
            import('../equipments/equipment/exaustor/feature/exaustor-shell/exaustor-shell-routing.module').then(
                (m) => m.ExaustorShellRoutingModule
            )
    },
    {
        path: 'telemetria',
        loadChildren: () =>
            import('../equipments/equipment/telemetria/feature/telemetria-shell/telemetria-shell-routing.module').then(
                (m) => m.TelemetriaShellRoutingModule
            )
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class EquipmentsRoutingModule {}