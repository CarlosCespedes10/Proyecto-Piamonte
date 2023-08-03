import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionPageComponent } from './informacion-page/informacion-page.component';

const routes: Routes = [
  {path:'', component:InformacionPageComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformacionRoutingModule { }