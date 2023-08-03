import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroActividadPageComponent } from './registro-actividad-page/registro-actividad-page.component';

const routes: Routes = [
  {path:'', component:RegistroActividadPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroActividadRoutingModule { }
