import { Component } from '@angular/core';
import rutaImagenes from 'src/app/shared/imagen/rutaImagenes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  imagenLogo = rutaImagenes.IMAGEN_LOGO_PIAMONTE;
}
