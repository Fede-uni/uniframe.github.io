import { Component } from '@angular/core';
import ButtonComponent from 'src/stories/components/buttons/button.component';

@Component({
  selector: 'app-ficha',
  templateUrl: './fIcha.component.html',
  styleUrls: ['../../../assets/CSS/Component-Styles/ficha.component.css'],
  standalone: true,
  imports:[ButtonComponent]
})
export class FichaComponent {
  

}