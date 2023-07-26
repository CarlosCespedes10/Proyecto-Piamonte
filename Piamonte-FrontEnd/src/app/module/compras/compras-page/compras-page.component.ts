import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComprasEntidad } from 'src/app/shared/entidades/ComprasEntidad';
import { DatosValidacionService } from './service/datos-validacion.service';

@Component({
  selector: 'app-compras-page',
  templateUrl: './compras-page.component.html',
  styleUrls: ['./compras-page.component.scss']
})
export class ComprasPageComponent {
  formularioCompras: FormGroup;

  constructor (public formulario: FormBuilder, public datosValidacionService: DatosValidacionService){
    this.formularioCompras = this.formulario.group({
      producto:['', [Validators.required]],
      valor: ['', [Validators.required]],
      autoriza: ['', [Validators.required]],
      fecha: ['', [Validators.required]]
    });
  }

  ngOnInit() {}



  login(): void
  {

    if (this.formularioCompras.valid) 
    {
      
      const datosCompras: ComprasEntidad = this.formularioCompras.value;

      this.datosValidacionService.validarDatosCompras(datosCompras).subscribe(
        (response: any) => {
          if (response.success) {
            console.log("Compra Exitosa")
          }
          else {
            alert("Por favor, inténtalo de nuevo.");
          }
        },
        (error: any) => {
          console.error(error);
          alert("Error al Registrar la compra. Por favor, inténtalo de nuevo.");
        }
      )

    }
  }
}

