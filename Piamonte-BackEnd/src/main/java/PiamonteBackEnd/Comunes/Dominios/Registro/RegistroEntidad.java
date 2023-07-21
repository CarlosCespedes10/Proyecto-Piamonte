package PiamonteBackEnd.Comunes.Dominios.Registro;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "NOMBRE_DE_LA_TABLA")
public class RegistroEntidad {
    @Id
    @Column (name = "NOMBRE_DEL_CAMPO")
    private Integer id;
}