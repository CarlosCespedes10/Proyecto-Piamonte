import { Component } from '@angular/core';
import rutasImagenes from 'src/app/shared/rutasImagenes';

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss']
})
export class SectionFourComponent {
  imagenMaquinaria1 = rutasImagenes.IMAGEN_MAQUINARIA_BULLDOZER;
  imagenMaquinaria2 = rutasImagenes.IMAGEN_MAQUINARIA_EXCAVADORA

}
