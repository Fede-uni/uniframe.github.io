
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'uni-button',
  template: `
    <button
      *ngIf="primary; else secondaryButton"
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
    ><span *ngIf="showIcon && icon" class="material-symbols-outlined button-icon">{{icon}}</span>
      {{ label }}
    </button>

    <ng-template #secondaryButton>
      <button
        type="button"
        (click)="onClick.emit($event)"
        [ngClass]="classes"
      ><span *ngIf="showIcon && icon" class="material-symbols-outlined button-icon">{{icon}}</span>
      {{ label }}
      </button>
    </ng-template>
  `,
  styleUrls: ['../assets/CSS/Component-Styles/buttonprueba.component.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */

  @Input()
  buttonType: 'primary' | 'primary-outline' | 'negative' | 'negative-outline' = 'primary';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  @Input() icon: string | null = '';  // Ícono recibido por el componente
  @Input() showIcon = true;               // Controla si se muestra el ícono

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

 

  public get classes(): string[] {
    // Determinamos las clases CSS basadas en el tipo de botón
    let mode = '';
    switch (this.buttonType) {
      case 'primary':
        mode = 'btn button-primary';
        break;
      case 'primary-outline':
        mode = 'btn button-primary-outline';
        break;
      case 'negative':
        mode = 'btn button-negative';
        break;
      case 'negative-outline':
        mode = 'btn button-negative-outline';
        break;
    }
    return [ mode];
  }
}