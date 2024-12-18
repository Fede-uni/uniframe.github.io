import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { FichaComponent } from './ficha.component';

const meta: Meta<FichaComponent> = {
  title: 'Uniframe/Sections/Ficha',
  component:FichaComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule,MatButtonModule,MatDividerModule],
    }),
  ],

};

export default meta;
type Story = StoryObj<FichaComponent>;

export const Ficha: Story = {
  args: {
  },
};

Ficha.parameters = { 
  docs: { 
    source: { 
      code: `<div class="ficha-container" >
    <div class="header-container">
      <div class="sec-head-ficha">
        <ng-container >
          <div class="icono-acceso" title="Privado" >
            <span class="material-symbols-outlined ">
              lock_outline
            </span>
          </div>
        </ng-container>

        <div  class="sec-head-titles-ficha"> 
          <div class="sec-head-title-ficha">
              <span  class="title-ficha" tabindex="0">
                Carátula
                <uni-button buttonType="icon" icon="content_copy" showIcon="true" size="sm"></uni-button>
                <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
              <!-- <button class="btn icon-button btn-sm">
                <span class="material-symbols-outlined button-icon">content_copy</span>
              </button> -->
              </span>
          </div>

          <div class="sec-head-subtitle-ficha">
            <span class="subtitle-ficha" tabindex="0">
              Subtitulo de ficha
              <uni-button buttonType="icon" icon="content_copy" showIcon="true" size="sm"></uni-button>
              <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
              <!-- <button class="btn icon-button btn-sm">
                <span class="material-symbols-outlined button-icon">content_copy</span>
              </button> -->
            </span>
          </div>
        </div>
      </div>
      <div class="sec-head-menu-modulos-ficha">
          <ng-container>
            <p class="module-title" >
              Ficha del expediente
            </p>
          </ng-container>
        <div class="column">
          <!-- ACÁ VA EL CONTROL DE CAMBIO DE MÓDULO -->
           <uni-menu-modulos></uni-menu-modulos>
           <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
           <!-- <div class="menu-modulos-container">
            <button attr.aria-label="Expediente"
              title="Expediente"
              class="menu-modulo-button active">
              <span class="material-symbols-outlined iconSize" id="icono-apps">
                  content_paste 
              </span>
            </button>
            <button attr.aria-label="Expediente"
              title="Expediente"
              class="menu-modulo-button ">
              <span class="material-symbols-outlined iconSize" id="icono-apps">
                  content_paste 
              </span>
            </button> 
            <button attr.aria-label="Expediente"
              title="Expediente"
              class="menu-modulo-button ">
              <span class="material-symbols-outlined iconSize" id="icono-apps">
                  content_paste 
              </span>
            </button>      
           </div> -->
        </div>
      </div>

      <div class="sec-head-buttons-ficha">
        <div class="head-buttons-ficha">
          <ng-content select="[buttons]">
            <!-- insertar contenido como botones que accionen sobre la Ficha -->
          </ng-content>
        </div>
        <uni-button buttonType="icon" icon="more_vert" showIcon="true" ></uni-button>
        !-- USAR EN CASO DE NO TENER EL COMPONENTE -->
            <!-- <button class="btn icon-button">
              <span class="material-symbols-outlined button-icon">more_vert</span>
            </button> -->
      </div>

    </div>

    <ng-content select="[body]">
      <!-- insertar contenido de la ficha -->
    </ng-content>
    

</div>`,
    }, 
  }, 
};
