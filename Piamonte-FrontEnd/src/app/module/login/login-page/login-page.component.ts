import { Component } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginValidacionService } from './servicio/login-validacion.service';
import { LoginEntidad } from 'src/app/shared/entidades/LoginEntidad';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  formularioLogin: FormGroup;

  constructor (private router: Router, public formulario: FormBuilder, public loginValidation: LoginValidacionService, private route: ActivatedRoute){
    this.formularioLogin = this.formulario.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  navegarEntrePaginas(){
    this.router.navigate(["piamonte-principal-page"]);
  }

  login(): void{

    if (this.formularioLogin.valid) {
      
      const datosLogin: LoginEntidad = this.formularioLogin.value;

      if (datosLogin.email === "programadores@gmail.com" && datosLogin.password === "123456") {
        this.router.navigate(['piamonte-principal-page'], { relativeTo: this.route })
      } 
      else {
        alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
      }
    }
    else{
      this.formularioLogin.markAllAsTouched();
      return;
    }
  }

  //Metodo Original Para enviar peticiones Http al lado del Servidor.
  //Realizar la validacion con el Backend.
  loginOriginal(): void {

    if (this.formularioLogin.invalid) {
      this.formularioLogin.markAllAsTouched();
      return;
    }

    const datosLogin: LoginEntidad = this.formularioLogin.value;

    this.loginValidation.validarDatosLogin(datosLogin).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigateByUrl("piamonte-principal-page");
        } 
        else {
          alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
        }
      },
      (error: any) => {
        console.error(error);
        alert("Error en el inicio de sesión. Por favor, inténtalo de nuevo.");
      }
    );
  }
}