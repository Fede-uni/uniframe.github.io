import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { VistaTarjetaComponent } from './vista-tarjeta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const meta: Meta<VistaTarjetaComponent> = {
  title: 'Uniframe/Pages/vista tarjeta',
  component:VistaTarjetaComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule,MatButtonModule,MatDividerModule,BrowserAnimationsModule],
    }),
  ],

};

export default meta;
type Story = StoryObj<VistaTarjetaComponent>;

export const VistaTarjeta: Story = {
  args: {
  },
};

VistaTarjeta.parameters = { 
  docs: { 
    source: { 
      code: `<app-header></app-header>
<div class="mx-5 h-100">
  <app-encabezado></app-encabezado>
  
  <app-filtros-rapidos></app-filtros-rapidos>
  
  <div class="d-flex">
      <div class=" sec-tarjetas collapsible-panel" [ngClass]="{ 'collapsed': collapsedPanel }">
          <app-lista-tarjeta></app-lista-tarjeta>
          <button 
              class="collapse-button" 
              (click)="collapsePanel()">
  
              <ng-container *ngIf="collapsedPanel">
                <span 
                  class="material-icons" 
                  aria-hidden="true"
                  aria-label="Contraer lista de expedientes" 
                  title="Contraer lista de expedientes">
                  chevron_right
                </span> 
              </ng-container>
  
              <ng-container *ngIf="!collapsedPanel">
                <span class="material-icons" aria-hidden="true">chevron_left</span> 
              </ng-container>
  
            </button>
      </div>
      <div class="sec-Ficha">
      <app-ficha></app-ficha>
      </div>
  </div>
</div>`,
    }, 
  }, 
};
