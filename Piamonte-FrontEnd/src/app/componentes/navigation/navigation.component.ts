import { Component } from '@angular/core';
import rutasImagenes from 'src/app/shared/imagen/rutasImagenes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  imagenLogo = rutasImagenes.IMAGEN_LOGO;
}
