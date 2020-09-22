/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/datos-graficas.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    /** @nocollapse */ DatosGraficasService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DatosGraficasService_Factory() { return new DatosGraficasService(i0.ɵɵinject(i1.HttpClient)); }, token: DatosGraficasService, providedIn: "root" });
    return DatosGraficasService;
}());
export { DatosGraficasService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatosGraficasService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0b3MtZ3JhZmljYXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BvcnRhbC1pbmRpY2Fkb3Jlcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRvcy1ncmFmaWNhcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7SUFJNUMsTUFBTSxHQUFHLGtFQUFrRTtBQUVqRjtJQUtFLDhCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQzs7Ozs7SUFFekMsaUVBQWtDOzs7O0lBQWxDLFVBQW1DLFVBQWtCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWtCLE1BQU0sZ0NBQTJCLFVBQVksQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7O2dCQVRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlEsVUFBVTs7OytCQURuQjtDQWlCQyxBQVZELElBVUM7U0FQWSxvQkFBb0I7Ozs7OztJQUVuQixvQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRGF0b3NHcmFmaWNhIH0gZnJvbSAnLi4vZW50aXRpZXMvZ3JhZmljYSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IGFwaVVybCA9ICdodHRwczovL3NlcnZpY2lvc2ZhY3R1cmFjaW9uLnhtLmNvbS5jby9YTS5Qb3J0YWwuSW5kaWNhZG9yZXMvYXBpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0b3NHcmFmaWNhc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgb2J0ZW5lckRhdG9zR3JhZmljYUFwb3J0ZXNIaWRyaWNvcyhyZXNvbHVjaW9uOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEYXRvc0dyYWZpY2E+KGAke2FwaVVybH0vT2ZlcnRhL0Fwb3J0ZXNIaWRyaWNvcy8ke3Jlc29sdWNpb259YCk7XG4gIH1cbn1cbiJdfQ==