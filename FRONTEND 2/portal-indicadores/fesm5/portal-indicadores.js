import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData, CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartsModule, ThemeService } from 'ng2-charts';
import localeCo from '@angular/common/locales/es-CO';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/datos-graficas.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var apiUrl = 'https://serviciosfacturacion.xm.com.co/XM.Portal.Indicadores/api';
var DatosGraficasService = /** @class */ (function () {
    function DatosGraficasService(http) {
        this.http = http;
    }
    /**
     * @param {?} resolucion
     * @return {?}
     */
    DatosGraficasService.prototype.obtenerDatosGraficaAportesHidricos = /**
     * @param {?} resolucion
     * @return {?}
     */
    function (resolucion) {
        return this.http.get(apiUrl + "/Oferta/AportesHidricos/" + resolucion);
    };
    DatosGraficasService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DatosGraficasService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DatosGraficasService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DatosGraficasService_Factory() { return new DatosGraficasService(ɵɵinject(HttpClient)); }, token: DatosGraficasService, providedIn: "root" });
    return DatosGraficasService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatosGraficasService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/grafica/grafica.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/portal-indicadores.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
registerLocaleData(localeCo, 'es-Co');
var PortalIndicadoresModule = /** @class */ (function () {
    function PortalIndicadoresModule() {
    }
    PortalIndicadoresModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [GraficaComponent],
                    imports: [
                        CommonModule,
                        ChartsModule,
                        HttpClientModule
                    ],
                    exports: [GraficaComponent],
                    providers: [ThemeService, DatePipe, { provide: LOCALE_ID, useValue: 'es-Co' }],
                },] }
    ];
    return PortalIndicadoresModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: portal-indicadores.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GraficaComponent, PortalIndicadoresModule, DatosGraficasService as ɵa };
//# sourceMappingURL=portal-indicadores.js.map
