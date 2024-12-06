import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { VistaTarjetaComponent } from './vista-tarjeta.component';
import { CustomComponentModule } from 'src/app/custom.module';

const meta: Meta<VistaTarjetaComponent> = {
  title: 'Example/vista tarjeta/vista tarjeta',
  component:VistaTarjetaComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule,MatButtonModule,MatDividerModule, CustomComponentModule],
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
      code: `<div class="view-module-container" >
    <div>
      <div class="header-container">
        <div class="information-container">
          <ng-container >

            <div title="Privado" style="padding-left: 10px;">
              <span class="material-icons">
                lock_outline
              </span>
            </div>

          </ng-container>

          <div style="width: 100%;">
            <div>
              <ng-container >
                <span class="titulo-expediente_ficha--texto" style="font-weight: bold;" tabindex="0">
                  Carátula
                </span>

                <ng-container >
                  <span class="material-icons btn-edit" >edit</span>
                </ng-container>
              </ng-container>

              <ng-template #editorCaratula>
                <mat-form-field appearance="outline" class="input-caratula">
                  <input #inputCaratula matInput placeholder="Carátula" [(ngModel)]="caratula" (blur)="closeEditModeCaratula()">
                </mat-form-field>
              </ng-template>
            </div>

            <div class="botones_margin">
              <span class="titulo-expediente_ficha--texto" tabindex="0">
                Títuo de Ficha
              </span>

              <span class="titulo-expediente_ficha--texto" tabindex="0">
                Subtitulo de ficha
              </span>

              <button  class="btn boton-copiar btn-sm etiqueta-estado" title="Copiar cuij">
                <span class="material-icons boton-secundario_icono" aria-hidden="true">
                  content_copy
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <div class="action-bar">
        <div class="column">
          <ng-container>
            <p class="module-title" >
              "MODULO EN VISUALIZACION" del expediente
            </p>
          </ng-container>
        </div>

        <div class="column">
          <!-- ACÁ VA EL CONTROL DE CAMBIO DE MÓDULO -->
        </div>

      </div>
    </div>

    <ng-container>
    </ng-container>

</div>`,
    }, 
  }, 
};
