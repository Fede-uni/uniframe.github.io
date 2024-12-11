import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSelect } from '@angular/material/select';

import { FiltrosRapidosComponent } from './filtros-rapidos.component';

const meta: Meta<FiltrosRapidosComponent> = {
  title: 'Uniframe/Sections/Filtros Rapidos',
  component:FiltrosRapidosComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [CommonModule,MatButtonModule,MatDividerModule, MatCheckbox, MatFormField, MatSelect],
    }),
  ],

};

export default meta;
type Story = StoryObj<FiltrosRapidosComponent>;

export const Tarjeta: Story = {
  args: {
  },
};

Tarjeta.parameters = { 
  docs: { 
    source: { 
      code: `<div class="row encabezado-container">
  <div class="text-container">
      <div class="contenedor-navegacion-vistas">
          <div class="row subHeader_espacio-iconos margin-header">
              <div class="secContenedor__titulo_exp secContenedor__titulo_exp--nowrap float-left">
                  <div class="text-breadcrum">
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
                  </div>

                  <div class="row">
                      <div class="text-título">
                      Actuaciones de SECRETARÍA GENERAL CAYT 
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <!-- crear expediente -->

  <div class="btn-container">
      <button class="btn button-primary">
        <span class="material-symbols-outlined button-icon">add_circle</span>
        Crear
      </button>
  </div>
  <mat-divider class="encabezado-border mt-2"></mat-divider>
</div>`,
    }, 
  }, 
};




