import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoPageComponent } from './mantenimiento-page/mantenimiento-page.component';

const routes: Routes = [
  {path:'', component:MantenimientoPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
