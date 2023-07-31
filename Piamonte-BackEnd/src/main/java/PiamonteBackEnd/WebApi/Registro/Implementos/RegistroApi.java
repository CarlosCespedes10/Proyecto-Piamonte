package PiamonteBackEnd.WebApi.Registro.Implementos;

import PiamonteBackEnd.Comunes.Constantes.EndPoints.Registro.InterfaceRegistroEndPoints;
import PiamonteBackEnd.Comunes.Dominios.Registro.DTO.RegistroEmpleadoDTO;
import PiamonteBackEnd.Comunes.Dominios.Registro.RegistroEmpleadoEntity;
import PiamonteBackEnd.Servicio.Registro.Implementos.RegistroEmpleadoServicio;
import PiamonteBackEnd.WebApi.Registro.InterfaceRegistroApi;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(InterfaceRegistroEndPoints.URL_BASE_REGISTRO_EMPLEADO)
public class RegistroApi implements InterfaceRegistroApi {
    private final RegistroEmpleadoServicio registroEmpleadoServicio;

    public RegistroApi(RegistroEmpleadoServicio registroEmpleadoServicio) {
        this.registroEmpleadoServicio = registroEmpleadoServicio;
    }
    @Override
    @PostMapping(InterfaceRegistroEndPoints.URL_CREAR_REGISTRO_EMPLEADO)
    public ResponseEntity<?> crearRegistroEmpleados( @RequestBody RegistroEmpleadoEntity registroEmpleadoEntity) {
        System.out.println("Prueba de Datos : " + registroEmpleadoEntity.getCorreoEmpleado());
        RegistroEmpleadoEntity registroEmpleadoCreado =  this.registroEmpleadoServicio.crearRegistroEmpleados(registroEmpleadoEntity);
        return ResponseEntity.ok().body(registroEmpleadoCreado);
    }
}