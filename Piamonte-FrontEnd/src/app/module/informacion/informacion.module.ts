import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { InformacionPageComponent } from './informacion-page/informacion-page.component';


@NgModule({
  declarations: [
    InformacionPageComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule
  ]
})
export class InformacionModule { }
