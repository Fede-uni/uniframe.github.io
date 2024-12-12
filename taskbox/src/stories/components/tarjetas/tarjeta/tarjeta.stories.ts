import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { TarjetaComponent } from './tarjeta.component';
import { EtiquetasComponent } from '../../../components/etiquetas/etiqueta.component';

const meta: Meta<TarjetaComponent> = {
  title: 'Uniframe/Components/Tarjetas',
  component:TarjetaComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule,MatButtonModule,MatDividerModule,EtiquetasComponent],
    }),
  ],

};

export default meta;
type Story = StoryObj<TarjetaComponent>;

export const Tarjeta: Story = {
  args: {
  },
};

Tarjeta.parameters = { 
  docs: { 
    source: { 
      code: ` 
    <div class="tarjeta">
      <div class="tarjeta-check">
        <input  type="checkbox" value="option1" aria-label="seleccionar tarjeta">
      </div>
      <div class="tarjeta-cuerpo" >
        <!-- Seccion dot/avatar/tipo de doc -->
        <div class="tarjeta-secdot" >
          <span class="dot dot_color">EXP</span>
          <span title="Privado" class="icon-candado">
            <span class="material-symbols-outlined">
              lock_outline
            </span>
          </span>
        </div>
        <!-- Seccion detalle de doc -->
        <div class="tarjeta-contenido--texto" > 
            <span tabindex="0" class="tarjeta-texto--titulo">
              Carátula de Expediente
            </span>
            <div class="tarjeta-texto--subtitulo">
              numero/año tipo cuij
            </div>
           <!-- Seccion etiquetas de doc -->
          <div class="tarjeta-contenido-etiquetas" >
            <uni-etiquetas class="d-flex">etiqueta</uni-etiquetas>
            <uni-etiquetas class="d-flex">etiqueta</uni-etiquetas>
            <uni-etiquetas class="d-flex">etiqueta</uni-etiquetas>
            <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
            <!-- <span 
                class="etiqueta-estado" 
                mat-raised-button placement="right">
                etiqueta
            </span>
            <span 
                class="etiqueta-estado" 
                mat-raised-button placement="right">
                etiqueta
            </span> -->
          </div>
        </div>

      </div>
      <!-- Seccion boton desacoplar -->
      <div class="tarjeta-secdesacoplar">
        <uni-button buttonType="icon" showIcon="true" icon="open_in_new" size="sm"></uni-button>
        <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
        <!-- <a  class="btn icon-button btn-sm" title="Abrir en nueva pestaña" tabindex="0">
          <span class="material-symbols-outlined button-icon" aria-hidden="true">open_in_new</span>
        </a> -->
      </div>
    </div>
`,
    }, 
  }, 
};



