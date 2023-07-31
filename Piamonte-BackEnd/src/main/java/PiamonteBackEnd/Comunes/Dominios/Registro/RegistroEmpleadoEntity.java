package PiamonteBackEnd.Comunes.Dominios.Registro;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table (name = "registro_empleados")
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistroEmpleadoEntity
{
    @Id
    @Column (name = "id")
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column (name = "nombre")
    private String nombreEmpleado;
    @Column (name = "email")
    private String correoEmpleado;
    @Column (name = "contraseña")
    private String contraseniaEmpleado;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombreEmpleado() {
        return nombreEmpleado;
    }

    public void setNombreEmpleado(String nombreEmpleado) {
        this.nombreEmpleado = nombreEmpleado;
    }

    public String getCorreoEmpleado() {
        return correoEmpleado;
    }

    public void setCorreoEmpleado(String correoEmpleado) {
        this.correoEmpleado = correoEmpleado;
    }

    public String getContraseniaEmpleado() {
        return contraseniaEmpleado;
    }

    public void setContraseniaEmpleado(String contraseniaEmpleado) {
        this.contraseniaEmpleado = contraseniaEmpleado;
    }
}