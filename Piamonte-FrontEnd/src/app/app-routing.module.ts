import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo: '/piamonte-principal-page', pathMatch: 'full'},
  {path:'piamonte-principal-page', loadChildren: () => 
          import('./module/principal/principal.module').then(m => m.PrincipalModule)},
  {path:'piamonte-login-page', loadChildren: () => 
          import('./module/login/login.module').then(m => m.LoginModule)}, 
  {path:'piamonte-registro-page', loadChildren: () => 
          import('./module/registro/registro.module').then(m => m.RegistroModule)},
  {path:'piamonte-inventario-page', loadChildren: () => 
          import('./module/inventario/inventario.module').then(m => m.InventarioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
