import { Component, OnInit } from '@angular/core';
import { DatosGraficasService } from '../servicios/datos-graficas.service';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  nombreEjeY = '';

  opcionesGrafica = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'GWh'
        }
      }]
    }
  };

  coloresGrafica: Color[] = [
    {
      borderColor: '#1a6589',
      pointBorderColor: '#1a6589',
      pointBackgroundColor: '#1a6589',
    },
    {
      borderColor: '#e87722',
      pointBorderColor: '#e87722',
      pointBackgroundColor: '#e87722',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  tipoGrafica = 'line';

  nombreGrafica: string = '';
  valoresGrafica = [];
  valoresGraficaMedia = [];
  valoresEjeX = [];

  datosGrafica: ChartDataSets[] = [
    { data: this.valoresGrafica, label: 'Caudal', lineTension: 0, borderWidth: 2, fill: false, pointRadius: 2 },
    { data: this.valoresGraficaMedia, label: 'Media histótica', lineTension: 0, borderWidth: 2, fill: false, pointRadius: 2 }
  ];

  lineChartLabels: Label[] = this.valoresEjeX;



  constructor(private servicioDatosGrafica: DatosGraficasService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.servicioDatosGrafica.obtenerDatosGraficaAportesHidricos('dia')
      .subscribe(datosGrafica => {
        this.nombreGrafica = datosGrafica.Nombre;
        this.nombreEjeY = datosGrafica.Variables[0].UnidadMedida;
        datosGrafica.Variables[0].Datos.forEach(dato => {
          this.valoresGrafica.unshift(dato.Valor);
          this.valoresEjeX.unshift(this.datePipe.transform(dato.Fecha, 'dd/MMM/yyyy', 'UTC-5', 'es-CO'));
        });
        datosGrafica.Variables[1].Datos.forEach(dato => {
          this.valoresGraficaMedia.unshift(dato.Valor);
        });
      });
  }
}
