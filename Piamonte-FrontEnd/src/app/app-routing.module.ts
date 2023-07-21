import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: '/piamonte-principal-page', pathMatch: 'full'},
  {path:'piamonte-principal-page', loadChildren: () => 
          import('./module/principal/principal.module').then(m => m.PrincipalModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
