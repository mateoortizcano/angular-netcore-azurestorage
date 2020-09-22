import { OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { DatosGraficasService } from '../services/datos-graficas.service';
export declare class GraficaComponent implements OnInit {
    private servicioDatosGrafica;
    private datePipe;
    nombreGrafica: string;
    tipoGrafica: string;
    lineChartLabels: Label[];
    nombreEjeY: string;
    datosGrafica: ChartDataSets[];
    coloresGrafica: Color[];
    opcionesGrafica: {
        responsive: boolean;
        scales: {
            xAxes: {
                gridLines: {
                    lineWidth: number;
                    zeroLineWidth: number;
                };
                ticks: {
                    maxTicksLimit: number;
                };
            }[];
            yAxes: {
                gridLines: {
                    lineWidth: number;
                    zeroLineWidth: number;
                };
                scaleLabel: {
                    display: boolean;
                    labelString: string;
                };
                ticks: {
                    beginAtZero: boolean;
                };
            }[];
        };
    };
    lineChartLegend: boolean;
    lineChartPlugins: any[];
    resolucion: string;
    constructor(servicioDatosGrafica: DatosGraficasService, datePipe: DatePipe);
    ngOnInit(): void;
    private consultarDatosGraficas;
    cambiarResolucion(event: any): void;
}
