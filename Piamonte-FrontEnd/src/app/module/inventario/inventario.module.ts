import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioPageComponent } from './inventario-page/inventario-page.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  declarations: [
    InventarioPageComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    ComponentesModule
  ]
})
export class InventarioModule { }