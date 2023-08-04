package PiamonteBackEnd.WebApi.Registro.Implementos;

import PiamonteBackEnd.Comunes.Constantes.EndPoints.Registro.InterfazUsuarioEndPoint;
import PiamonteBackEnd.Comunes.Dominios.Registro.RegistroEmpleadoEntity;
import PiamonteBackEnd.Comunes.Dominios.Registro.Usuario;
import PiamonteBackEnd.Servicio.Registro.Implementos.UsuarioServicio;
import PiamonteBackEnd.WebApi.Registro.InterfaceRegistroApi;
import PiamonteBackEnd.WebApi.Registro.InterfazUsuarioApi;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(InterfazUsuarioEndPoint.URL_BASE_REGISTRO_EMPLEADO)
public class UsuarioApi implements InterfazUsuarioApi {
    private final UsuarioServicio usuarioServicio;

    public UsuarioApi(UsuarioServicio usuarioServicio) {
        this.usuarioServicio = usuarioServicio;
    }

    @Override
    @PostMapping(InterfazUsuarioEndPoint.URL_VALIDAR_USUARIO)
    public ResponseEntity<?> validarUsuario(Usuario usuario) {
        System.out.println("Prueba de Datos : " + usuario.getEmail() + usuario.getContrasenia());
        String correo = usuario.getEmail();
        String contrasenia = usuario.getContrasenia();
        boolean empleadoValidado = this.usuarioServicio.validarUsuario(correo, contrasenia);
        System.out.println("Validar datos de database " + empleadoValidado);
        return ResponseEntity.ok().body(empleadoValidado);
    }
}