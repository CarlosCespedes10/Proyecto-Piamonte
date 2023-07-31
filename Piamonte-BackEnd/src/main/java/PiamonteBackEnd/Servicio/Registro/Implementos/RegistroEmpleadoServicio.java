package PiamonteBackEnd.Servicio.Registro.Implementos;

import PiamonteBackEnd.Comunes.Dominios.Registro.RegistroEmpleadoEntity;
import PiamonteBackEnd.Repositorio.Registro.InterfaceRegistroEmpleadosRepositorio;
import PiamonteBackEnd.Servicio.Registro.InterfaceRegistroEmpleadosServicio;
import org.springframework.stereotype.Service;

@Service
public class RegistroEmpleadoServicio implements InterfaceRegistroEmpleadosServicio {
    private final InterfaceRegistroEmpleadosRepositorio interfaceRegistroEmpleadosRepositorio;

    public RegistroEmpleadoServicio(InterfaceRegistroEmpleadosRepositorio interfaceRegistroEmpleadosRepositorio) {
        this.interfaceRegistroEmpleadosRepositorio = interfaceRegistroEmpleadosRepositorio;
    }

    @Override
    public RegistroEmpleadoEntity crearRegistroEmpleados( RegistroEmpleadoEntity registroEmpleadoEntity)
    {
        return this.interfaceRegistroEmpleadosRepositorio.save(registroEmpleadoEntity);
    }
}