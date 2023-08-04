package PiamonteBackEnd.Repositorio.Registro;

import PiamonteBackEnd.Comunes.Dominios.Registro.RegistroEmpleadoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InterfaceRegistroEmpleadosRepositorio extends JpaRepository<RegistroEmpleadoEntity, Integer>
{
   
}