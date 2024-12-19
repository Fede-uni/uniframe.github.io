import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'uni-desplegable',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './desplegable.component.html',
  styleUrl: '../../../assets/CSS/Component-Styles/desplegable.component.css'
})
export class DesplegableComponent {

}
