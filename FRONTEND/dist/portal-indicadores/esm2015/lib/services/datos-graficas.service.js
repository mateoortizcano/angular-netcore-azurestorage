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
const apiUrl = 'https://serviciosfacturacion.xm.com.co/XM.Portal.Indicadores/api';
export class DatosGraficasService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} resolucion
     * @return {?}
     */
    obtenerDatosGraficaAportesHidricos(resolucion) {
        return this.http.get(`${apiUrl}/Oferta/AportesHidricos/${resolucion}`);
    }
}
DatosGraficasService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DatosGraficasService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DatosGraficasService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DatosGraficasService_Factory() { return new DatosGraficasService(i0.ɵɵinject(i1.HttpClient)); }, token: DatosGraficasService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatosGraficasService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0b3MtZ3JhZmljYXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BvcnRhbC1pbmRpY2Fkb3Jlcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9kYXRvcy1ncmFmaWNhcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7TUFJNUMsTUFBTSxHQUFHLGtFQUFrRTtBQUtqRixNQUFNLE9BQU8sb0JBQW9COzs7O0lBRS9CLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7OztJQUV6QyxrQ0FBa0MsQ0FBQyxVQUFrQjtRQUNuRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFlLEdBQUcsTUFBTSwyQkFBMkIsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7WUFURixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFSUSxVQUFVOzs7Ozs7OztJQVdMLG9DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEYXRvc0dyYWZpY2EgfSBmcm9tICcuLi9lbnRpdGllcy9ncmFmaWNhJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuY29uc3QgYXBpVXJsID0gJ2h0dHBzOi8vc2VydmljaW9zZmFjdHVyYWNpb24ueG0uY29tLmNvL1hNLlBvcnRhbC5JbmRpY2Fkb3Jlcy9hcGknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRvc0dyYWZpY2FzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBvYnRlbmVyRGF0b3NHcmFmaWNhQXBvcnRlc0hpZHJpY29zKHJlc29sdWNpb246IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERhdG9zR3JhZmljYT4oYCR7YXBpVXJsfS9PZmVydGEvQXBvcnRlc0hpZHJpY29zLyR7cmVzb2x1Y2lvbn1gKTtcbiAgfVxufVxuIl19