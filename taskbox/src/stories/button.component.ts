import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <button
      *ngIf="primary; else secondaryButton"
      mat-flat-button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{ 'background-color': backgroundColor }"
    >
      {{ label }}
    </button>

    <ng-template #secondaryButton>
      <button
        mat-stroked-button
        type="button"
        (click)="onClick.emit($event)"
        [ngClass]="classes"
        [ngStyle]="{ 'background-color': backgroundColor }"
      >
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
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'btn-primary' : 'btn-secondary';

    return ['storybook-button', 'storybook-button--${this.size}', mode];
  }
}