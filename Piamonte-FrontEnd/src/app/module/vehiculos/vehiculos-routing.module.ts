import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosPageComponent } from './vehiculos-page/vehiculos-page.component';

const routes: Routes = [
  {path:'', component: VehiculosPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
