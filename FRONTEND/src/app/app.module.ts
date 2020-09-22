import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoDirectorioComponent } from './listado-directorio/listado-directorio.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { GraficaComponent } from './grafica/grafica.component';
import { AppRoutingModule } from './app-routing.module';
import { PortalIndicadoresModule } from '../../projects/portal-indicadores/src/lib/portal-indicadores.module';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    ListadoDirectorioComponent,
    GraficaComponent
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
