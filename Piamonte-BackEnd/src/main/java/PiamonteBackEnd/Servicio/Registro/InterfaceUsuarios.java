package PiamonteBackEnd.Servicio.Registro;

import PiamonteBackEnd.Comunes.Dominios.Registro.RegistroEmpleadoEntity;

import java.util.List;

public interface InterfaceUsuarios {
    public boolean validarUsuario(String correo, String contrasenia);
}