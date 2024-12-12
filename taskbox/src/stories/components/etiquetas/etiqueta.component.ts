import { Component,Input } from '@angular/core';

@Component({
  selector: 'uni-etiquetas',
  standalone: true,
  template: `
  <span 
      class="etiqueta-estado" 
      mat-raised-button placement="right">
      {{label}}
  </span>
  
`,
  styleUrl: '../../../assets/CSS/Component-Styles/etiquetas.component.css'
})
export class EtiquetasComponent {
  @Input()
  label = 'Etiqueta';
}
