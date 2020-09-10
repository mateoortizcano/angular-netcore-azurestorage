import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosGrafica } from '../entidades/grafica';

@Injectable({
  providedIn: 'root'
})
export class DatosGraficasService {

  constructor(private http: HttpClient) { }

  obtenerDatosGraficaAportesHidricos(resolucion: string) {
    return this.http.get<DatosGrafica>(`https://serviciosfacturacion.xm.com.co/XM.Portal.Indicadores/api/Oferta/AportesHidricos/${resolucion}`);
  }
}
