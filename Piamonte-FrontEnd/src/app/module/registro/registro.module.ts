import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroPageComponent } from './registro-page/registro-page.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RegistroPageComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ComponentesModule
  ]
})
export class RegistroModule { }
