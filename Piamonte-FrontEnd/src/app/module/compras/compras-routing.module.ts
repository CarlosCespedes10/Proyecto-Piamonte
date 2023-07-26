import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasPageComponent } from './compras-page/compras-page.component';


const routes: Routes = [
  {path:'', component: ComprasPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
