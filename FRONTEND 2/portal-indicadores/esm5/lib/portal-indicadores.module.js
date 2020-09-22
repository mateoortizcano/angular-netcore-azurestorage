/**
 * @fileoverview added by tsickle
 * Generated from: lib/portal-indicadores.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LOCALE_ID, NgModule } from '@angular/core';
import { GraficaComponent } from './grafica/grafica.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { CommonModule, DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeCo from '@angular/common/locales/es-CO';
import { HttpClientModule } from '@angular/common/http';
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
export { PortalIndicadoresModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLWluZGljYWRvcmVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BvcnRhbC1pbmRpY2Fkb3Jlcy8iLCJzb3VyY2VzIjpbImxpYi9wb3J0YWwtaW5kaWNhZG9yZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLFFBQVEsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFdEM7SUFBQTtJQVd1QyxDQUFDOztnQkFYdkMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGdCQUFnQjtxQkFFakI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzNCLFNBQVMsRUFBRSxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQztpQkFDL0U7O0lBQ3NDLDhCQUFDO0NBQUEsQUFYeEMsSUFXd0M7U0FBM0IsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTE9DQUxFX0lELCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JhZmljYUNvbXBvbmVudCB9IGZyb20gJy4vZ3JhZmljYS9ncmFmaWNhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydHNNb2R1bGUsIFRoZW1lU2VydmljZSB9IGZyb20gJ25nMi1jaGFydHMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyByZWdpc3RlckxvY2FsZURhdGEgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IGxvY2FsZUNvIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2VzLUNPJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbnJlZ2lzdGVyTG9jYWxlRGF0YShsb2NhbGVDbywgJ2VzLUNvJyk7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0dyYWZpY2FDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENoYXJ0c01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG5cbiAgXSxcbiAgZXhwb3J0czogW0dyYWZpY2FDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtUaGVtZVNlcnZpY2UsIERhdGVQaXBlLCB7IHByb3ZpZGU6IExPQ0FMRV9JRCwgdXNlVmFsdWU6ICdlcy1DbycgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFBvcnRhbEluZGljYWRvcmVzTW9kdWxlIHsgfVxuIl19