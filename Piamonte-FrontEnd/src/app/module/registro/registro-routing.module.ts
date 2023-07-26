import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroPageComponent } from './registro-page/registro-page.component';

const routes: Routes = [
  {path:'', component: RegistroPageComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
