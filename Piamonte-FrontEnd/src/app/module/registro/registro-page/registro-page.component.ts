import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroEntidad } from 'src/app/shared/entidades/RegistroEntidad';
import { RegistroValidacionService } from './servicio/registro-validacion.service';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.scss']
})
export class RegistroPageComponent
{
  
  formularioRegistro: FormGroup;

  constructor (private router: Router, public formulario: FormBuilder, public registroValidacionService: RegistroValidacionService, private route: ActivatedRoute){
    this.formularioRegistro = this.formulario.group({
      nombreEmpleado:['', [Validators.required]],
      correoEmpleado: ['', [Validators.required, Validators.email]],
      contraseniaEmpleado: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  registro(): void
  {
    
    if (this.formularioRegistro.valid) 
    {
      const datosRegistro: RegistroEntidad = this.formularioRegistro.value;

      this.registroValidacionService.validarDatosRegistro(datosRegistro).subscribe(
        (response: any) => {
          if (response.success) {
            console.log("Datos Enviados")
          }
          else {
            alert("Por favor, inténtalo de nuevo.");
          }
        },
        (error: any) => {
          console.error(error);
          alert("Error al Registrar el Usuario. Por favor, inténtalo de nuevo.");
        }
      )
    }
  }
}