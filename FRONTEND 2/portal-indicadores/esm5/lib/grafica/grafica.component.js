/**
 * @fileoverview added by tsickle
 * Generated from: lib/grafica/grafica.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DatosGraficasService } from '../services/datos-graficas.service';
var GraficaComponent = /** @class */ (function () {
    function GraficaComponent(servicioDatosGrafica, datePipe) {
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
    GraficaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.consultarDatosGraficas(this.resolucion);
    };
    /**
     * @private
     * @param {?} resolucion
     * @return {?}
     */
    GraficaComponent.prototype.consultarDatosGraficas = /**
     * @private
     * @param {?} resolucion
     * @return {?}
     */
    function (resolucion) {
        var _this = this;
        /** @type {?} */
        var valoresGrafica = [];
        /** @type {?} */
        var valoresEjeX = [];
        /** @type {?} */
        var valoresGrafica2 = [];
        this.servicioDatosGrafica.obtenerDatosGraficaAportesHidricos(resolucion)
            .subscribe((/**
         * @param {?} datosGrafica
         * @return {?}
         */
        function (datosGrafica) {
            _this.nombreGrafica = datosGrafica.Nombre;
            _this.nombreEjeY = datosGrafica.Variables[0].UnidadMedida;
            datosGrafica.Variables[0].Datos.forEach((/**
             * @param {?} dato
             * @return {?}
             */
            function (dato) {
                valoresGrafica.unshift(dato.Valor);
                valoresEjeX.unshift(_this.datePipe.transform(dato.Fecha, 'dd/MMM/yyyy', 'UTC-5', 'es-CO'));
            }));
            datosGrafica.Variables[1].Datos.forEach((/**
             * @param {?} dato
             * @return {?}
             */
            function (dato) {
                valoresGrafica2.unshift(dato.Valor);
            }));
            _this.lineChartLabels = valoresEjeX;
            _this.datosGrafica[0].data = valoresGrafica;
            _this.datosGrafica[1].data = valoresGrafica2;
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    GraficaComponent.prototype.cambiarResolucion = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.consultarDatosGraficas(event.target.value);
    };
    GraficaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-grafica',
                    template: "<div>\n    <h1 style=\"text-align:center\">{{nombreGrafica}}</h1>\n</div>\n<div *ngIf=\"this.datosGrafica[0].data.length !== 0\" class=\"chart-wrapper\" class=\"img\">\n    <canvas baseChart [datasets]=\"datosGrafica\" [labels]=\"lineChartLabels\" [options]=\"opcionesGrafica\"\n        [colors]=\"coloresGrafica\" [legend]=\"lineChartLegend\" [chartType]=\"tipoGrafica\" [plugins]=\"lineChartPlugins\">\n    </canvas>\n</div>\n<div style=\"text-align:center\">\n    <label for=\"opcionesResolucion\">Resolucion</label>\n    <select name=\"opcionesResolucion\" [value]=\"resolucion\" id=\"opcionesResolucion\" (change)=\"cambiarResolucion($event)\">\n        <option value=\"dia\">Diario</option>\n        <option value=\"mes\">Mes</option>\n    </select>\n</div>",
                    styles: [".img{display:block;margin-left:auto;margin-right:auto;width:70%!important;height:70%!important}"]
                }] }
    ];
    /** @nocollapse */
    GraficaComponent.ctorParameters = function () { return [
        { type: DatosGraficasService },
        { type: DatePipe }
    ]; };
    return GraficaComponent;
}());
export { GraficaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZmljYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wb3J0YWwtaW5kaWNhZG9yZXMvIiwic291cmNlcyI6WyJsaWIvZ3JhZmljYS9ncmFmaWNhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTFFO0lBNERFLDBCQUFvQixvQkFBMEMsRUFBVSxRQUFrQjtRQUF0RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXREMUYsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxNQUFNLENBQUM7UUFDckIsb0JBQWUsR0FBWSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBWSxHQUFvQjtZQUM5QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUU7WUFDN0csRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUU7U0FDdkgsQ0FBQztRQUNGLG1CQUFjLEdBQVk7WUFDeEI7Z0JBQ0UsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLGdCQUFnQixFQUFFLFNBQVM7Z0JBQzNCLG9CQUFv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USxvQkFBb0I7Z0JBRHBCLFFBQVE7O0lBNEZqQix1QkFBQztDQUFBLEFBekZELElBeUZDO1NBcEZZLGdCQUFnQjs7O0lBQzNCLHlDQUFtQjs7SUFDbkIsdUNBQXFCOztJQUNyQiwyQ0FBOEI7O0lBQzlCLHNDQUFtQjs7SUFDbkIsd0NBR0U7O0lBQ0YsMENBWUU7O0lBRUYsMkNBMEJFOztJQUNGLDJDQUF1Qjs7SUFDdkIsNENBQXNCOztJQUV0QixzQ0FBbUI7Ozs7O0lBRVAsZ0RBQWtEOzs7OztJQUFFLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydERhdGFTZXRzIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgTGFiZWwsIENvbG9yIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRvc0dyYWZpY2FzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdG9zLWdyYWZpY2FzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZ3JhZmljYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmFmaWNhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JhZmljYS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR3JhZmljYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG5vbWJyZUdyYWZpY2EgPSAnJztcbiAgdGlwb0dyYWZpY2EgPSAnbGluZSc7XG4gIGxpbmVDaGFydExhYmVsczogTGFiZWxbXSA9IFtdO1xuICBub21icmVFamVZID0gJ0dXaCc7XG4gIGRhdG9zR3JhZmljYTogQ2hhcnREYXRhU2V0c1tdID0gW1xuICAgIHsgZGF0YTogW10sIGxhYmVsOiAnQ2F1ZGFsJywgbGluZVRlbnNpb246IDAsIGJvcmRlcldpZHRoOiAyLCBmaWxsOiBmYWxzZSwgcG9pbnRSYWRpdXM6IDAsIHBvaW50SGl0UmFkaXVzOiA1IH0sXG4gICAgeyBkYXRhOiBbXSwgbGFiZWw6ICdNZWRpYSBoaXN0w7N0aWNhJywgbGluZVRlbnNpb246IDAsIGJvcmRlcldpZHRoOiAyLCBmaWxsOiBmYWxzZSwgcG9pbnRSYWRpdXM6IDAsIHBvaW50SGl0UmFkaXVzOiA1IH1cbiAgXTtcbiAgY29sb3Jlc0dyYWZpY2E6IENvbG9yW10gPSBbXG4gICAge1xuICAgICAgYm9yZGVyQ29sb3I6ICcjRkY2QTEzJyxcbiAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjRkY2QTEzJyxcbiAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI0ZGNkExMycsXG4gICAgfSxcbiAgICB7XG4gICAgICBib3JkZXJDb2xvcjogJyM0NDAwOTknLFxuICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyM0NDAwOTknLFxuICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjNDQwMDk5JyxcbiAgICB9LFxuICAgIC8vIE9UUk9TIENPTE9SRVMgWE0gI0ZGQzYwMCAjMDA5NjZDICMyQUQyQzkgI0FDMTQ1QSAjNzU3ODdCXG4gIF07XG5cbiAgb3BjaW9uZXNHcmFmaWNhID0ge1xuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgc2NhbGVzOiB7XG4gICAgICB4QXhlczogW3tcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgbGluZVdpZHRoOiAwLFxuICAgICAgICAgIHplcm9MaW5lV2lkdGg6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBtYXhUaWNrc0xpbWl0OiAxM1xuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIHlBeGVzOiBbe1xuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBsaW5lV2lkdGg6IDAsXG4gICAgICAgICAgemVyb0xpbmVXaWR0aDogMVxuICAgICAgICB9LFxuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6IHRoaXMubm9tYnJlRWplWSxcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1cbiAgfTtcbiAgbGluZUNoYXJ0TGVnZW5kID0gdHJ1ZTtcbiAgbGluZUNoYXJ0UGx1Z2lucyA9IFtdO1xuXG4gIHJlc29sdWNpb24gPSAnZGlhJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2lvRGF0b3NHcmFmaWNhOiBEYXRvc0dyYWZpY2FzU2VydmljZSwgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUpIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbnN1bHRhckRhdG9zR3JhZmljYXModGhpcy5yZXNvbHVjaW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc3VsdGFyRGF0b3NHcmFmaWNhcyhyZXNvbHVjaW9uOiBzdHJpbmcpIHtcbiAgICBsZXQgdmFsb3Jlc0dyYWZpY2EgPSBbXTtcbiAgICBsZXQgdmFsb3Jlc0VqZVggPSBbXTtcbiAgICBsZXQgdmFsb3Jlc0dyYWZpY2EyID0gW107XG4gICAgdGhpcy5zZXJ2aWNpb0RhdG9zR3JhZmljYS5vYnRlbmVyRGF0b3NHcmFmaWNhQXBvcnRlc0hpZHJpY29zKHJlc29sdWNpb24pXG4gICAgICAuc3Vic2NyaWJlKGRhdG9zR3JhZmljYSA9PiB7XG4gICAgICAgIHRoaXMubm9tYnJlR3JhZmljYSA9IGRhdG9zR3JhZmljYS5Ob21icmU7XG4gICAgICAgIHRoaXMubm9tYnJlRWplWSA9IGRhdG9zR3JhZmljYS5WYXJpYWJsZXNbMF0uVW5pZGFkTWVkaWRhO1xuICAgICAgICBkYXRvc0dyYWZpY2EuVmFyaWFibGVzWzBdLkRhdG9zLmZvckVhY2goZGF0byA9PiB7XG4gICAgICAgICAgdmFsb3Jlc0dyYWZpY2EudW5zaGlmdChkYXRvLlZhbG9yKTtcbiAgICAgICAgICB2YWxvcmVzRWplWC51bnNoaWZ0KHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdG8uRmVjaGEsICdkZC9NTU0veXl5eScsICdVVEMtNScsICdlcy1DTycpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRhdG9zR3JhZmljYS5WYXJpYWJsZXNbMV0uRGF0b3MuZm9yRWFjaChkYXRvID0+IHtcbiAgICAgICAgICB2YWxvcmVzR3JhZmljYTIudW5zaGlmdChkYXRvLlZhbG9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGluZUNoYXJ0TGFiZWxzID0gdmFsb3Jlc0VqZVg7XG4gICAgICAgIHRoaXMuZGF0b3NHcmFmaWNhWzBdLmRhdGEgPSB2YWxvcmVzR3JhZmljYTtcbiAgICAgICAgdGhpcy5kYXRvc0dyYWZpY2FbMV0uZGF0YSA9IHZhbG9yZXNHcmFmaWNhMjtcbiAgICAgIH0pO1xuICB9XG5cbiAgY2FtYmlhclJlc29sdWNpb24oZXZlbnQpIHtcbiAgICB0aGlzLmNvbnN1bHRhckRhdG9zR3JhZmljYXMoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxufVxuIl19