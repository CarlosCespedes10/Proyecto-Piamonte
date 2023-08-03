package PiamonteBackEnd.Comunes.Dominios.Registro.DTO;

import lombok.*;
import org.springframework.web.bind.annotation.RequestMapping;



public class RegistroEmpleadoDTO
{
    private Integer id;
    private String nombreEmpleado;
    private String correoEmpleado;
    private String contraseniaEmpleado;

    public RegistroEmpleadoDTO( String nombreEmpleado, String correoEmpleado, String contraseniaEmpleado) {
        this.nombreEmpleado = nombreEmpleado;
        this.correoEmpleado = correoEmpleado;
        this.contraseniaEmpleado = contraseniaEmpleado;
    }

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
