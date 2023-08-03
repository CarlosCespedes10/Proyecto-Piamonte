import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroActividadRoutingModule } from './registro-actividad-routing.module';
import { RegistroActividadPageComponent } from './registro-actividad-page/registro-actividad-page.component';


@NgModule({
  declarations: [
    RegistroActividadPageComponent
  ],
  imports: [
    CommonModule,
    RegistroActividadRoutingModule
  ]
})
export class RegistroActividadModule { }
