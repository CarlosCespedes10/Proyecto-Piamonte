import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: '/piamonte-login-page', pathMatch: 'full'},
  {path:'piamonte-login-page', loadChildren: () => 
          import('./module/login/login.module').then(m => m.LoginModule)}, 
  {path:'piamonte-registro-page', loadChildren: () => 
          import('./module/registro/registro.module').then(m => m.RegistroModule)},
  {path:'piamonte-vehiculos-page', loadChildren: () => 
          import('./module/vehiculos/vehiculos.module').then(m => m.VehiculosModule)}, 
  {path:'piamonte-lista-vehiculos-page', loadChildren: () => 
          import('./module/lista-vehiculos/lista-vehiculos.module').then(m => m.ListaVehiculosModule)},
  {path:'piamonte-informacion-page', loadChildren: () => 
          import('./module/informacion/informacion.module').then(m => m.InformacionModule)}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }