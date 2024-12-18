import { Component } from '@angular/core';
import ButtonComponent from '../buttons/button.component';

@Component({
  selector: 'uni-drag-and-drop',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: '../../../assets/CSS/Component-Styles/drag-and-drop.component.css'
})
export class DragAndDropComponent {

}
