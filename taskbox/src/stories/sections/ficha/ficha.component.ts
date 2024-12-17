import { Component } from '@angular/core';
import ButtonComponent from 'src/stories/components/buttons/button.component';
import { MenuModulosComponent } from 'src/stories/components/menu-modulos/menu-modulos.component';

@Component({
  selector: 'app-ficha',
  templateUrl: './fIcha.component.html',
  styleUrls: ['../../../assets/CSS/Component-Styles/ficha.component.css'],
  standalone: true,
  imports:[ButtonComponent,MenuModulosComponent]
})
export class FichaComponent {
  

}