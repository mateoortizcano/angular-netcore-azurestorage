import { LOCALE_ID, NgModule } from '@angular/core';
import { GraficaComponent } from './grafica/grafica.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { CommonModule, DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeCo from '@angular/common/locales/es-CO';

registerLocaleData(localeCo, 'es-Co');

@NgModule({
  declarations: [GraficaComponent],
  imports: [
    CommonModule,
    ChartsModule,

  ],
  exports: [GraficaComponent],
  providers: [ThemeService, DatePipe, { provide: LOCALE_ID, useValue: 'es-Co' }],
})
export class PortalIndicadoresModule { }
