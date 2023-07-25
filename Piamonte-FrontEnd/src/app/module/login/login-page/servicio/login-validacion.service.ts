import { Injectable } from '@angular/core';
import { LoginEntidad } from 'src/app/shared/entidades/LoginEntidad';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginValidacionService {

  private API : string = "http://localhost:8080"

  constructor(private clienteHttp: HttpClient){}

  validarDatosLogin(datosLogin: LoginEntidad) : Observable <any> {
    return this.clienteHttp.post(this.API + "EndPoint", datosLogin);
  }
}