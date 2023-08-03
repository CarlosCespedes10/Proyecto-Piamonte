import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVehiculosPageComponent } from './lista-vehiculos-page/lista-vehiculos-page.component';

const routes: Routes = [
  {path:'', component:ListaVehiculosPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaVehiculosRoutingModule { }
