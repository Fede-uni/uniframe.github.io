import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSelect } from '@angular/material/select';

import { FiltrosRapidosComponent } from './filtros-rapidos.component';
import ButtonComponent from '../../../components/buttons/button.component';

const meta: Meta<FiltrosRapidosComponent> = {
  title: 'Uniframe/Sections/Filtros Rapidos',
  component:FiltrosRapidosComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [CommonModule,MatButtonModule,MatDividerModule, MatCheckbox, MatFormField, MatSelect, ButtonComponent],
    }),
  ],

};

export default meta;
type Story = StoryObj<FiltrosRapidosComponent>;

export const FiltrosRapidos: Story = {
  args: {
  },
};

FiltrosRapidos.parameters = { 
  docs: { 
    source: { 
      code: `<div class="header-filtros-rapidos">
    <!-- Filtros aplicados -->
    <div >
      <fieldset class=" Sec-filtros-aplicados"  aria-label="Filtros aplicados">
        <div class="contenedor-filtros-aplicados">
            <uni-filtros-aplicados></uni-filtros-aplicados>
            <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
            <!-- <div class="col-auto">
              <p class="filtroAplicado">Filtros Aplicados ></p>
            </div>
            <div class="col-auto item-aplicado">
              <p class="filtroAplicado" tabindex="0">Bandeja: <span class="filtroAplicadoDesc">Bandeja seleccionada</span></p>
            </div>
            <div class="col-auto item-aplicado">
              <p class="filtroAplicado">Incluir asignados: <span class="filtroAplicadoDesc">Sí</span></p>
            </div>
            <div class="col-auto item-aplicado" >
              <p class="filtroAplicado" tabindex="0">Tipos: <span class="filtroAplicadoDesc">Todos</span></p>
            </div>
            <div class="col-auto item-aplicado" >
              <p class="filtroAplicado" tabindex="0">Estados: <span class="filtroAplicadoDesc">Todos</span>
              </p>
            </div>
            <div class="col-auto item-aplicado">
              <p class="filtroAplicado" tabindex="0">Acceso: <span class="filtroAplicadoDesc">Todos</span></p>
            </div>
            <div class="col-auto filtroAplicado ">
              <button type="button" class="btn button-link ml-2 btn-sm" aria-label="Limpiar filtros">Limpiar</button>
            </div> -->
        </div>
        <!-- Botón Reiniciar Filtros -->
        
        <!--btn desplegable-->
        <uni-button buttonType="primary-outline" icon="filter_alt" showIcon="true" label="Filtros" size="sm" 
        aria-label="mostrar filtros" [attr.aria-expanded]="!collapsedFiltros" (click)="collapseFilter()">
        </uni-button>
        <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
          <!-- <button 
            class="btn button-primary-outline btn-sm" 
            aria-label="mostrar filtros"
            [attr.aria-expanded]="!collapsedFiltros"
            (click)="collapseFilter()">
            <span class="material-symbols-outlined button-icon" >filter_alt</span>
            Filtros
          </button>  -->
      </fieldset>
    </div>

<!-- Filtros rápidos -->
<div class="d-flex gap-3 pb-3" *ngIf="!collapsedFiltros">
      <div class="col-auto" >
        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="mat-form-field-format width100">
          <mat-select placeholder="Bandeja" >
            <mat-option >
              Bandeja
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>

      <div  class="col-auto">
        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="mat-form-field-format width100">
          <mat-select id="al-nivelesacceso"
            multiple aria-label="Nivel de acceso">
            <mat-select-trigger>
              <span>Acceso: Todos</span>
            </mat-select-trigger>
            <mat-option >nivel de acceso</mat-option>
          </mat-select>
        </mat-form-field>
      </div>

      <div class="col-auto">
        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="mat-form-field-format width100">
          <mat-select  multiple
            aria-label="Tipos Expedientes">
            <mat-select-trigger >
              <span>Tipo: Todos</span>
            </mat-select-trigger>
            <mat-option >Tipo de expediente</mat-option>
          </mat-select>
        </mat-form-field>
      </div>

      <div  class="col-auto">
        <mat-form-field appearance="outline" subscriptSizing="dynamic" class="mat-form-field-format width100">
          <mat-select id="al-marcadores" multiple
            aria-label="Marcadores" placeholder="Marcadores">
            <mat-select-trigger >
              <span>Marcadores: Todos</span>
            </mat-select-trigger>
            <mat-option >marcadores</mat-option>
          </mat-select>
        </mat-form-field>
      </div>

      <div  class="col-auto">
        <uni-button buttonType="icon" icon="search" showIcon="true" class="icon-button-color"></uni-button>
        <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
        <!-- <button type="button" class="btn icon-button icon-button-color" title="Buscar">
            <span class="material-symbols-outlined button-icon ">search</span>
        </button> -->
      </div>
</div>`,
    }, 
  }, 
};




