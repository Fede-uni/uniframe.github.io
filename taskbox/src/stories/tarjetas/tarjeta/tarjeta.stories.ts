import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { TarjetaComponent } from './tarjeta.component';
import { EtiquetasComponent } from './../../etiquetas/etiqueta.component';

const meta: Meta<TarjetaComponent> = {
  title: 'Example/Tarjetas',
  component:TarjetaComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      declarations: [EtiquetasComponent],
      imports: [CommonModule,MatButtonModule,MatDividerModule],
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
      code: `<div id="content-listaExp">
  <div aria-label="lista de documentos formato tarjeta" class="tabla-ListaExp">
    <div  style="border-bottom: 1px solid var(--color-neutro-200); display: flex; height: 126px;">
      <div  style="padding: 10px;">
        <input  type="checkbox" value="option1" aria-label="seleccionar tarjeta">
      </div>

      <div class="tarjeta" >
        <div  style="width: 60px; display: flex; flex-direction: column; align-items: center;">
          <span class="dot dot_expedientes">EXP</span>
          <span title="Privado" *>
            <span class="material-icons candado-ficha">
              lock_outline
            </span>
          </span>
        </div>

        <div  style="width: 100%; display: flex; flex-direction: column; padding-left: 10px;"> 
          <div  style="display: flex; flex-direction: column; " >
              <div class="secContenedor__botonesListExp--left secContenedor__botonesListExp--nowrap" >
                <span tabindex="0"><strong class="tarjeta__col-der--titulo">Carátula de Expediente</strong></span>
              </div>
            <div style="font-size: 0.7rem;" id="la-divExpedienteNumero">
              numero/año tipo cuij
            </div>
          </div>
  
          <div class="secContainer-etiquetas" >
            <!-- AQUI VAN LAS ETIQUETAS -->
            <span 
                class="etiqueta-estado" 
                mat-raised-button placement="right">
                etiqueta
            </span>
            <span 
                class="etiqueta-estado" 
                mat-raised-button placement="right">
                etiqueta
            </span>
          </div>
        </div>

         <!-- open new_tab -->
         <div style="padding: 3px 10px;">
          <a id="la-nuevaPestania" title="Abrir en nueva pestaña" tabindex="0">
            <em class="material-icons" style="font-size: 18px; cursor: pointer;" aria-hidden="true">open_in_new</em>
          </a>
        </div>
      </div>
      <!-- <mat-divider class="col-12 mt-2" style="border-top-color: var(--color-neutro-200);"></mat-divider> -->
    </div>

  </div>
</div>`,
    }, 
  }, 
};



