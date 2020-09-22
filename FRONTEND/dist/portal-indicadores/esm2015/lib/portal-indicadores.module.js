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
export class PortalIndicadoresModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLWluZGljYWRvcmVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BvcnRhbC1pbmRpY2Fkb3Jlcy8iLCJzb3VyY2VzIjpbImxpYi9wb3J0YWwtaW5kaWNhZG9yZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLFFBQVEsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFhdEMsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBWG5DLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDaEMsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixnQkFBZ0I7aUJBRWpCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDL0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMT0NBTEVfSUQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcmFmaWNhQ29tcG9uZW50IH0gZnJvbSAnLi9ncmFmaWNhL2dyYWZpY2EuY29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0c01vZHVsZSwgVGhlbWVTZXJ2aWNlIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHJlZ2lzdGVyTG9jYWxlRGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgbG9jYWxlQ28gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2xvY2FsZXMvZXMtQ08nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxucmVnaXN0ZXJMb2NhbGVEYXRhKGxvY2FsZUNvLCAnZXMtQ28nKTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbR3JhZmljYUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2hhcnRzTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcblxuICBdLFxuICBleHBvcnRzOiBbR3JhZmljYUNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1RoZW1lU2VydmljZSwgRGF0ZVBpcGUsIHsgcHJvdmlkZTogTE9DQUxFX0lELCB1c2VWYWx1ZTogJ2VzLUNvJyB9XSxcbn0pXG5leHBvcnQgY2xhc3MgUG9ydGFsSW5kaWNhZG9yZXNNb2R1bGUgeyB9XG4iXX0=