import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComprasEntidad } from 'src/app/shared/entidades/ComprasEntidad';

@Injectable({
  providedIn: 'root'
})
export class DatosValidacionService {

  private API : string = "http://localhost:8080"

  //validar con el Back-end
  constructor(private clienteHttp: HttpClient){}

  validarDatosCompras(datosCompras: ComprasEntidad) : Observable <any> 
  {
    return this.clienteHttp.post(this.API + "EndPoint", datosCompras);
  }
}

