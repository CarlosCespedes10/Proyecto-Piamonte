import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroEntidad } from 'src/app/shared/entidades/RegistroEntidad';

@Injectable({
  providedIn: 'root'
})
export class RegistroValidacionService {

  private API : string = "http://localhost:8080"

  //validar con el Back-end
  constructor(private clienteHttp: HttpClient){}

  validarDatosRegistro(datosRegistro: RegistroEntidad) : Observable <any> 
  {
    return this.clienteHttp.post(this.API + "EndPoint", datosRegistro);
  }
}
