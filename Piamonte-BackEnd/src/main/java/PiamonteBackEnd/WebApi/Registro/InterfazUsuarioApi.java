package PiamonteBackEnd.WebApi.Registro;

import PiamonteBackEnd.Comunes.Constantes.EndPoints.Registro.InterfazUsuarioEndPoint;
import PiamonteBackEnd.Comunes.Dominios.Registro.Usuario;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface InterfazUsuarioApi {
    @PostMapping(InterfazUsuarioEndPoint.URL_VALIDAR_USUARIO)
    public ResponseEntity<?> validarUsuario(@RequestBody Usuario usuario);
}
