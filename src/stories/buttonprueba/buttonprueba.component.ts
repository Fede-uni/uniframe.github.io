import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="{{Class}}">{{ label }}</button>
  `,
  styleUrls: ['../../assets/CSS/Component-Styles/buttonprueba.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() Class: string = 'btn btn-primary';
}
