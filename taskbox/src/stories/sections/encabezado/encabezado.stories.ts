import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import EncabezadoComponent from './encabezado.component';

const meta: Meta<EncabezadoComponent> = {
  title: 'Uniframe/Sections/Encabezado',
  component:EncabezadoComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      
      imports: [CommonModule,MatButtonModule,MatDividerModule],
    }),
  ],

};

export default meta;
type Story = StoryObj<EncabezadoComponent>;

export const Encabezado: Story = {
  args: {
  },
};

Encabezado.parameters = { 
  docs: { 
    source: { 
      code: `<div class="row encabezado-container">
  <div class="text-container">
      <uni-breadcrumb></uni-breadcrumb>
      <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
      <!-- <div class="text-breadcrum">
          <a>
              <span class="contraste"> Organismo</span>
          </a>
          <span class="mx-1">/</span>
          <a >
              <span class="contraste"> Dependencia </span>
          </a>
          <span  class="mx-1">/</span>
          <label  attr.aria-label="Expediente ">
          Expediente  
          </label>
      </div> -->
      

      <div class="row mt-1">
          <div class="text-título">
          Actuaciones de SECRETARÍA GENERAL CAYT 
          </div>
      </div>
  </div>

  <!-- Botón crear expediente -->
  <div class="btn-container">
    <uni-button buttonType="primary" icon="add_circle" showIcon="true" label="Crear"></uni-button>
      <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
      <!-- <button class="btn button-primary">
        <span class="material-symbols-outlined button-icon">add_circle</span>
        Crear
      </button> -->
  </div>
  <mat-divider class="encabezado-border mt-3"></mat-divider>
</div>
`,
    }, 
  }, 
};


