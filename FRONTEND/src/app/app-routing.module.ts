import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoDirectorioComponent } from './listado-directorio/listado-directorio.component';
import { GraficasIndicadoresComponent } from './graficas-indicadores/graficas-indicadores.component';

const routes: Routes = [
    {
        path: 'archivos',
        component: ListadoDirectorioComponent
    },
    {
        path: 'graficas',
        component: GraficasIndicadoresComponent
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }