package PiamonteBackEnd.Repositorio.Registro;

import PiamonteBackEnd.Comunes.Dominios.Registro.RegistroEmpleadoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterfaceRegistroEmpleadosRepositorio extends JpaRepository<RegistroEmpleadoEntity, Integer>
{

}