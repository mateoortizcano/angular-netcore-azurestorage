import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { DatosGraficasService } from '../services/datos-graficas.service';

@Component({
  selector: 'lib-aportes-hidricos',
  templateUrl: './aportes-hidricos.component.html',
  styleUrls: ['./aportes-hidricos.component.css']
})
export class AportesHidricosComponent implements OnInit {
  nombreGrafica = '';
  tipoGrafica = 'line';
  lineChartLabels: Label[] = [];
  nombreEjeY = 'GWh';
  datosGrafica: ChartDataSets[] = [
    { data: [], label: 'Caudal', lineTension: 0, borderWidth: 2, fill: false, pointRadius: 0, pointHitRadius: 5 },
    { data: [], label: 'Media histótica', lineTension: 0, borderWidth: 2, fill: false, pointRadius: 0, pointHitRadius: 5 }
  ];
  coloresGrafica: Color[] = [
    {
      borderColor: '#FF6A13',
      pointBorderColor: '#FF6A13',
      pointBackgroundColor: '#FF6A13',
    },
    {
      borderColor: '#440099',
      pointBorderColor: '#440099',
      pointBackgroundColor: '#440099',
    },
    // OTROS COLORES XM #FFC600 #00966C #2AD2C9 #AC145A #75787B
  ];

  opcionesGrafica = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          lineWidth: 0,
          zeroLineWidth: 1
        },
        ticks: {
          maxTicksLimit: 13
        }
      }],
      yAxes: [{
        gridLines: {
          lineWidth: 0,
          zeroLineWidth: 1
        },
        scaleLabel: {
          display: false,
          labelString: this.nombreEjeY,
        },
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  lineChartLegend = true;
  lineChartPlugins = [];

  resolucion = 'dia';

  constructor(private servicioDatosGrafica: DatosGraficasService, private datePipe: DatePipe) { }
  ngOnInit() {
    this.consultarDatosGraficas(this.resolucion);
  }

  private consultarDatosGraficas(resolucion: string) {
    let valoresGrafica = [];
    let valoresEjeX = [];
    let valoresGrafica2 = [];
    this.servicioDatosGrafica.obtenerDatosGraficaAportesHidricos(resolucion)
      .subscribe(datosGrafica => {
        this.nombreGrafica = datosGrafica.Nombre;
        this.nombreEjeY = datosGrafica.Variables[0].UnidadMedida;
        datosGrafica.Variables[0].Datos.forEach(dato => {
          valoresGrafica.unshift(dato.Valor);
          valoresEjeX.unshift(this.datePipe.transform(dato.Fecha, 'dd/MMM/yyyy', 'UTC-5', 'es-CO'));
        });
        datosGrafica.Variables[1].Datos.forEach(dato => {
          valoresGrafica2.unshift(dato.Valor);
        });
        this.lineChartLabels = valoresEjeX;
        this.datosGrafica[0].data = valoresGrafica;
        this.datosGrafica[1].data = valoresGrafica2;
      });
  }

  cambiarResolucion(event) {
    this.consultarDatosGraficas(event.target.value);
  }
}
