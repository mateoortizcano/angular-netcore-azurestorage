/**
 * @fileoverview added by tsickle
 * Generated from: lib/grafica/grafica.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DatosGraficasService } from '../services/datos-graficas.service';
export class GraficaComponent {
    /**
     * @param {?} servicioDatosGrafica
     * @param {?} datePipe
     */
    constructor(servicioDatosGrafica, datePipe) {
        this.servicioDatosGrafica = servicioDatosGrafica;
        this.datePipe = datePipe;
        this.nombreGrafica = '';
        this.tipoGrafica = 'line';
        this.lineChartLabels = [];
        this.nombreEjeY = 'GWh';
        this.datosGrafica = [
            { data: [], label: 'Caudal', lineTension: 0, borderWidth: 2, fill: false, pointRadius: 0, pointHitRadius: 5 },
            { data: [], label: 'Media histótica', lineTension: 0, borderWidth: 2, fill: false, pointRadius: 0, pointHitRadius: 5 }
        ];
        this.coloresGrafica = [
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
        ];
        this.opcionesGrafica = {
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
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.resolucion = 'dia';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.consultarDatosGraficas(this.resolucion);
    }
    /**
     * @private
     * @param {?} resolucion
     * @return {?}
     */
    consultarDatosGraficas(resolucion) {
        /** @type {?} */
        let valoresGrafica = [];
        /** @type {?} */
        let valoresEjeX = [];
        /** @type {?} */
        let valoresGrafica2 = [];
        this.servicioDatosGrafica.obtenerDatosGraficaAportesHidricos(resolucion)
            .subscribe((/**
         * @param {?} datosGrafica
         * @return {?}
         */
        datosGrafica => {
            this.nombreGrafica = datosGrafica.Nombre;
            this.nombreEjeY = datosGrafica.Variables[0].UnidadMedida;
            datosGrafica.Variables[0].Datos.forEach((/**
             * @param {?} dato
             * @return {?}
             */
            dato => {
                valoresGrafica.unshift(dato.Valor);
                valoresEjeX.unshift(this.datePipe.transform(dato.Fecha, 'dd/MMM/yyyy', 'UTC-5', 'es-CO'));
            }));
            datosGrafica.Variables[1].Datos.forEach((/**
             * @param {?} dato
             * @return {?}
             */
            dato => {
                valoresGrafica2.unshift(dato.Valor);
            }));
            this.lineChartLabels = valoresEjeX;
            this.datosGrafica[0].data = valoresGrafica;
            this.datosGrafica[1].data = valoresGrafica2;
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    cambiarResolucion(event) {
        this.consultarDatosGraficas(event.target.value);
    }
}
GraficaComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-grafica',
                template: "<div>\n    <h1 style=\"text-align:center\">{{nombreGrafica}}</h1>\n</div>\n<div *ngIf=\"this.datosGrafica[0].data.length !== 0\" class=\"chart-wrapper\" class=\"img\">\n    <canvas baseChart [datasets]=\"datosGrafica\" [labels]=\"lineChartLabels\" [options]=\"opcionesGrafica\"\n        [colors]=\"coloresGrafica\" [legend]=\"lineChartLegend\" [chartType]=\"tipoGrafica\" [plugins]=\"lineChartPlugins\">\n    </canvas>\n</div>\n<div style=\"text-align:center\">\n    <label for=\"opcionesResolucion\">Resolucion</label>\n    <select name=\"opcionesResolucion\" [value]=\"resolucion\" id=\"opcionesResolucion\" (change)=\"cambiarResolucion($event)\">\n        <option value=\"dia\">Diario</option>\n        <option value=\"mes\">Mes</option>\n    </select>\n</div>",
                styles: [".img{display:block;margin-left:auto;margin-right:auto;width:70%!important;height:70%!important}"]
            }] }
];
/** @nocollapse */
GraficaComponent.ctorParameters = () => [
    { type: DatosGraficasService },
    { type: DatePipe }
];
if (false) {
    /** @type {?} */
    GraficaComponent.prototype.nombreGrafica;
    /** @type {?} */
    GraficaComponent.prototype.tipoGrafica;
    /** @type {?} */
    GraficaComponent.prototype.lineChartLabels;
    /** @type {?} */
    GraficaComponent.prototype.nombreEjeY;
    /** @type {?} */
    GraficaComponent.prototype.datosGrafica;
    /** @type {?} */
    GraficaComponent.prototype.coloresGrafica;
    /** @type {?} */
    GraficaComponent.prototype.opcionesGrafica;
    /** @type {?} */
    GraficaComponent.prototype.lineChartLegend;
    /** @type {?} */
    GraficaComponent.prototype.lineChartPlugins;
    /** @type {?} */
    GraficaComponent.prototype.resolucion;
    /**
     * @type {?}
     * @private
     */
    GraficaComponent.prototype.servicioDatosGrafica;
    /**
     * @type {?}
     * @private
     */
    GraficaComponent.prototype.datePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZmljYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wb3J0YWwtaW5kaWNhZG9yZXMvIiwic291cmNlcyI6WyJsaWIvZ3JhZmljYS9ncmFmaWNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTzFFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBdUQzQixZQUFvQixvQkFBMEMsRUFBVSxRQUFrQjtRQUF0RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXREMUYsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxNQUFNLENBQUM7UUFDckIsb0JBQWUsR0FBWSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBWSxHQUFvQjtZQUM5QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUU7WUFDN0csRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUU7U0FDdkgsQ0FBQztRQUNGLG1CQUFjLEdBQVk7WUFDeEI7Z0JBQ0UsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLGdCQUFnQixF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O1lBRHBCLFFBQVE7Ozs7SUFTZix5Q0FBbUI7O0lBQ25CLHVDQUFxQjs7SUFDckIsMkNBQThCOztJQUM5QixzQ0FBbUI7O0lBQ25CLHdDQUdFOztJQUNGLDBDQVlFOztJQUVGLDJDQTBCRTs7SUFDRiwyQ0FBdUI7O0lBQ3ZCLDRDQUFzQjs7SUFFdEIsc0NBQW1COzs7OztJQUVQLGdEQUFrRDs7Ozs7SUFBRSxvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnREYXRhU2V0cyB9IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7IExhYmVsLCBDb2xvciB9IGZyb20gJ25nMi1jaGFydHMnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0b3NHcmFmaWNhc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRvcy1ncmFmaWNhcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWdyYWZpY2EnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JhZmljYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dyYWZpY2EuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdyYWZpY2FDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBub21icmVHcmFmaWNhID0gJyc7XG4gIHRpcG9HcmFmaWNhID0gJ2xpbmUnO1xuICBsaW5lQ2hhcnRMYWJlbHM6IExhYmVsW10gPSBbXTtcbiAgbm9tYnJlRWplWSA9ICdHV2gnO1xuICBkYXRvc0dyYWZpY2E6IENoYXJ0RGF0YVNldHNbXSA9IFtcbiAgICB7IGRhdGE6IFtdLCBsYWJlbDogJ0NhdWRhbCcsIGxpbmVUZW5zaW9uOiAwLCBib3JkZXJXaWR0aDogMiwgZmlsbDogZmFsc2UsIHBvaW50UmFkaXVzOiAwLCBwb2ludEhpdFJhZGl1czogNSB9LFxuICAgIHsgZGF0YTogW10sIGxhYmVsOiAnTWVkaWEgaGlzdMOzdGljYScsIGxpbmVUZW5zaW9uOiAwLCBib3JkZXJXaWR0aDogMiwgZmlsbDogZmFsc2UsIHBvaW50UmFkaXVzOiAwLCBwb2ludEhpdFJhZGl1czogNSB9XG4gIF07XG4gIGNvbG9yZXNHcmFmaWNhOiBDb2xvcltdID0gW1xuICAgIHtcbiAgICAgIGJvcmRlckNvbG9yOiAnI0ZGNkExMycsXG4gICAgICBwb2ludEJvcmRlckNvbG9yOiAnI0ZGNkExMycsXG4gICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNGRjZBMTMnLFxuICAgIH0sXG4gICAge1xuICAgICAgYm9yZGVyQ29sb3I6ICcjNDQwMDk5JyxcbiAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjNDQwMDk5JyxcbiAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnIzQ0MDA5OScsXG4gICAgfSxcbiAgICAvLyBPVFJPUyBDT0xPUkVTIFhNICNGRkM2MDAgIzAwOTY2QyAjMkFEMkM5ICNBQzE0NUEgIzc1Nzg3QlxuICBdO1xuXG4gIG9wY2lvbmVzR3JhZmljYSA9IHtcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHNjYWxlczoge1xuICAgICAgeEF4ZXM6IFt7XG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGxpbmVXaWR0aDogMCxcbiAgICAgICAgICB6ZXJvTGluZVdpZHRoOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgbWF4VGlja3NMaW1pdDogMTNcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICB5QXhlczogW3tcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgbGluZVdpZHRoOiAwLFxuICAgICAgICAgIHplcm9MaW5lV2lkdGg6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiB0aGlzLm5vbWJyZUVqZVksXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWVcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG4gIH07XG4gIGxpbmVDaGFydExlZ2VuZCA9IHRydWU7XG4gIGxpbmVDaGFydFBsdWdpbnMgPSBbXTtcblxuICByZXNvbHVjaW9uID0gJ2RpYSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNpb0RhdG9zR3JhZmljYTogRGF0b3NHcmFmaWNhc1NlcnZpY2UsIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlKSB7IH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb25zdWx0YXJEYXRvc0dyYWZpY2FzKHRoaXMucmVzb2x1Y2lvbik7XG4gIH1cblxuICBwcml2YXRlIGNvbnN1bHRhckRhdG9zR3JhZmljYXMocmVzb2x1Y2lvbjogc3RyaW5nKSB7XG4gICAgbGV0IHZhbG9yZXNHcmFmaWNhID0gW107XG4gICAgbGV0IHZhbG9yZXNFamVYID0gW107XG4gICAgbGV0IHZhbG9yZXNHcmFmaWNhMiA9IFtdO1xuICAgIHRoaXMuc2VydmljaW9EYXRvc0dyYWZpY2Eub2J0ZW5lckRhdG9zR3JhZmljYUFwb3J0ZXNIaWRyaWNvcyhyZXNvbHVjaW9uKVxuICAgICAgLnN1YnNjcmliZShkYXRvc0dyYWZpY2EgPT4ge1xuICAgICAgICB0aGlzLm5vbWJyZUdyYWZpY2EgPSBkYXRvc0dyYWZpY2EuTm9tYnJlO1xuICAgICAgICB0aGlzLm5vbWJyZUVqZVkgPSBkYXRvc0dyYWZpY2EuVmFyaWFibGVzWzBdLlVuaWRhZE1lZGlkYTtcbiAgICAgICAgZGF0b3NHcmFmaWNhLlZhcmlhYmxlc1swXS5EYXRvcy5mb3JFYWNoKGRhdG8gPT4ge1xuICAgICAgICAgIHZhbG9yZXNHcmFmaWNhLnVuc2hpZnQoZGF0by5WYWxvcik7XG4gICAgICAgICAgdmFsb3Jlc0VqZVgudW5zaGlmdCh0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShkYXRvLkZlY2hhLCAnZGQvTU1NL3l5eXknLCAnVVRDLTUnLCAnZXMtQ08nKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkYXRvc0dyYWZpY2EuVmFyaWFibGVzWzFdLkRhdG9zLmZvckVhY2goZGF0byA9PiB7XG4gICAgICAgICAgdmFsb3Jlc0dyYWZpY2EyLnVuc2hpZnQoZGF0by5WYWxvcik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpbmVDaGFydExhYmVscyA9IHZhbG9yZXNFamVYO1xuICAgICAgICB0aGlzLmRhdG9zR3JhZmljYVswXS5kYXRhID0gdmFsb3Jlc0dyYWZpY2E7XG4gICAgICAgIHRoaXMuZGF0b3NHcmFmaWNhWzFdLmRhdGEgPSB2YWxvcmVzR3JhZmljYTI7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNhbWJpYXJSZXNvbHVjaW9uKGV2ZW50KSB7XG4gICAgdGhpcy5jb25zdWx0YXJEYXRvc0dyYWZpY2FzKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==