package PiamonteBackEnd.Repositorio.Registro;

import PiamonteBackEnd.Comunes.Dominios.Registro.RegistroEntidad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterfaceRegistroRepositorio extends JpaRepository<RegistroEntidad, Integer> {
}
