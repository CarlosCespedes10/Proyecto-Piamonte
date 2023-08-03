import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo: '/piamonte-login-page', pathMatch: 'full'},
  {path:'piamonte-login-page', loadChildren: () => 
          import('./module/login/login.module').then(m => m.LoginModule)}, 
  {path:'piamonte-registro-page', loadChildren: () => 
          import('./module/registro/registro.module').then(m => m.RegistroModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }