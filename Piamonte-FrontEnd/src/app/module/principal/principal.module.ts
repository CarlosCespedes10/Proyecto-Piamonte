import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { SectionOneComponent } from './principal-page/componentes/section-one/section-one.component';
import { SectionTwoComponent } from './principal-page/componentes/section-two/section-two.component';
import { SectionThreeComponent } from './principal-page/componentes/section-three/section-three.component';
import { SectionFourComponent } from './principal-page/componentes/section-four/section-four.component';


@NgModule({
  declarations: [
    PrincipalPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    ComponentesModule
  ]
})
export class PrincipalModule { }
