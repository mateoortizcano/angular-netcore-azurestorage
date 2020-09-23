import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoDirectorioComponent } from './listado-directorio/listado-directorio.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PortalIndicadoresModule } from '../../projects/portal-indicadores/src/lib/portal-indicadores.module';
import { NgModule } from '@angular/core';
import { GraficasIndicadoresComponent } from './graficas-indicadores/graficas-indicadores.component';



@NgModule({
  declarations: [
    AppComponent,
    ListadoDirectorioComponent,
    GraficasIndicadoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    PortalIndicadoresModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
