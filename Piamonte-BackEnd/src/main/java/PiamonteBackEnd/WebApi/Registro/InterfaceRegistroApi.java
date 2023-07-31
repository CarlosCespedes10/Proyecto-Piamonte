package PiamonteBackEnd.WebApi.Registro;

import PiamonteBackEnd.Comunes.Constantes.EndPoints.Registro.InterfaceRegistroEndPoints;
import PiamonteBackEnd.Comunes.Dominios.Registro.DTO.RegistroEmpleadoDTO;
import PiamonteBackEnd.Comunes.Dominios.Registro.RegistroEmpleadoEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface InterfaceRegistroApi {
    @PostMapping(InterfaceRegistroEndPoints.URL_CREAR_REGISTRO_EMPLEADO)
    public ResponseEntity<?> crearRegistroEmpleados(@RequestBody RegistroEmpleadoEntity registroEmpleadoEntity);
}