import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-home-indicadores',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idIndicadorSeleccionado = 0;
  indicadoresPorTipo = [
    {
      tipo: 'oferta',
      id: 0,
      indicadores: [
        'Aportes hídricos (GWh)',
        'Detalle aportes hídricos (GWh)',
        'Reservas hídricas (GWh)',
        'Detalle reservas hídricas (GWh)',
        'Generación SIN (GWh)',
        'Capacidad SIN (MW)',
        'Consumo combustibles',
        'Vertimientos (GWh)',
        'Detalle vertimientos (GWh)'
      ]
    },
    {
      tipo: 'demanda',
      id: 1,
      indicadores: [
        'Comportamiento de la demanda de energía del SIN',
        'Demanda y crecimiento de la demanda',
        'Demanda regulada y no regulada',
        'Demanda por regiones y ORs'
      ]
    }
  ]

  indicadores = [
    'Aportes hídricos (GWh)',
    'Detalle aportes hídricos (GWh)',
    'Reservas hídricas (GWh)',
    'Detalle reservas hídricas (GWh)',
    'Generación SIN (GWh)',
    'Capacidad SIN (MW)',
    'Consumo combustibles',
    'Vertimientos (GWh)',
    'Detalle vertimientos (GWh)'
  ]

  constructor() { }

  ngOnInit() {
  }

  cambiarTipoIndicador(tipoIndicador: number) {
    this.idIndicadorSeleccionado = tipoIndicador;
    this.indicadores = this.indicadoresPorTipo[tipoIndicador].indicadores;
  }

}
