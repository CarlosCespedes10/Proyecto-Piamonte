import { Component } from '@angular/core';
import rutaImagenes from 'src/app/shared/imagen/rutaImagenes';


@Component({
  selector: 'app-inventario-page',
  templateUrl: './inventario-page.component.html',
  styleUrls: ['./inventario-page.component.scss']
})
export class InventarioPageComponent {
  imgCompras = rutaImagenes.IMAGEN_COMPRAS;
  imgProveedores = rutaImagenes.IMAGEN_PROVEEDORES;
  imgExistencias = rutaImagenes.IMAGEN_EXISTENCIAS;
}
