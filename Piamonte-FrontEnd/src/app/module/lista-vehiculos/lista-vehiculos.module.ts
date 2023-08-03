import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaVehiculosRoutingModule } from './lista-vehiculos-routing.module';
import { ListaVehiculosPageComponent } from './lista-vehiculos-page/lista-vehiculos-page.component';


@NgModule({
  declarations: [
    ListaVehiculosPageComponent
  ],
  imports: [
    CommonModule,
    ListaVehiculosRoutingModule
  ]
})
export class ListaVehiculosModule { }
