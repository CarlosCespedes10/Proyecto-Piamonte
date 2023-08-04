package PiamonteBackEnd.Servicio.Registro.Implementos;

import PiamonteBackEnd.Comunes.Dominios.Registro.RegistroEmpleadoEntity;
import PiamonteBackEnd.Repositorio.Registro.InterfaceRegistroEmpleadosRepositorio;
import PiamonteBackEnd.Servicio.Registro.InterfaceUsuarios;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServicio implements InterfaceUsuarios {

    private final InterfaceRegistroEmpleadosRepositorio interfaceRegistroEmpleadosRepositorio;

    public UsuarioServicio(InterfaceRegistroEmpleadosRepositorio interfaceRegistroEmpleadosRepositorio) {
        this.interfaceRegistroEmpleadosRepositorio = interfaceRegistroEmpleadosRepositorio;
    }

    @Override
    public boolean validarUsuario(String correo, String contrasenia) {
        boolean usuarioEncontrado = false;
        List<RegistroEmpleadoEntity> listaEmpleados = this.interfaceRegistroEmpleadosRepositorio.findAll();
        for (RegistroEmpleadoEntity empleado: listaEmpleados){
            if (empleado.getCorreoEmpleado().equals(correo)) {
                if (empleado.getContraseniaEmpleado().equals(contrasenia)) {
                    System.out.println("Este es el dato real " + empleado.getContraseniaEmpleado());
                    usuarioEncontrado = true;
                }
            }
        }
        return usuarioEncontrado;
    }
}