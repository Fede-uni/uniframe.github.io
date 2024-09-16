import { FiltrosRapidosComponent } from './filtros-rapidos.component';
import {moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';

const meta: Meta<FiltrosRapidosComponent> = {
  title: 'Components/FiltrosRapidos',
  component: FiltrosRapidosComponent,
   decorators: [
    moduleMetadata({
      imports: [CommonModule,BrowserAnimationsModule,MatMenuModule,MatFormFieldModule], // Usa CommonModule aquí
    }),
  ],
  tags: ['autodocs'],
 
};

export default meta;

type Story = StoryObj<FiltrosRapidosComponent>;

export const header: Story = {
  render: (args) => ({
    template: `
    <div class="filtros-rapidos-contenedor">

    <div class="header-filtros-rapidos">
      <div class="sec-filtros-aplicados">
        <!-- Filtros aplicados -->
        <div >
          <fieldset class="row filtros-aplicados"  aria-label="Filtros aplicados">
            <div class="contenedor-filtros-aplicados">
              <div class="col-auto">
                <p class="filtroAplicado">Filtros Aplicados></p>
              </div>
              <div class="contenedor-filtros-aplicados">
                <div class="col-auto item-aplicado">
                  <p class="filtroAplicado" tabindex="0">Bandeja: <span class="filtroAplicadoDesc">bandeja seleccionada</span></p>
                </div>
                <div class="col-auto item-aplicado">
                  <p class="filtroAplicado" tabindex="0">Responsable: <span
                      class="filtroAplicadoDesc">usuario responsable</span></p>
                </div>
                <div class="col-auto item-aplicado" >
                  <p class="filtroAplicado" tabindex="0">Tipos: <span class="filtroAplicadoDesc">tipos de documento</span></p>
                </div>
                <div class="col-auto item-aplicado" >
                  <p class="filtroAplicado" tabindex="0">Estados: <span class="filtroAplicadoDesc">estado de documento</span></p>
                </div>
                <div class="col-auto item-aplicado" >
                  <p class="filtroAplicado" tabindex="0">Acceso: <span class="filtroAplicadoDesc">nivel de acceso</span></p>
                </div>
                <div class="col-auto item-aplicado" >
                  <p class="filtroAplicado" tabindex="0">Busqueda: <span class="filtroAplicadoDesc">busqueda</span></p>
                </div>
                <div class="col-auto item-aplicado" >
                  <p class="filtroAplicado" tabindex="0">Asignados: <span
                      class="filtroAplicadoDesc">ususarios asignados</span></p>
                </div>
                <div class="col-auto item-aplicado" >
                  <p class="filtroAplicado" tabindex="0">Mandatario: <span
                      class="filtroAplicadoDesc">Mandatario seleccionado}</span></p>
                </div>
                <div class="col-auto item-aplicado" *ngIf="usrSorteadoSeleccionado">
                  <p class="filtroAplicado" tabindex="0">Sorteado: <span
                      class="filtroAplicadoDesc">Sorteado</span></p>
                </div>
                <div class="col-auto item-aplicado" >
                  <p class="filtroAplicado" tabindex="0">Lote: <span
                      class="filtroAplicadoDesc">N° Lote</span></p>
                </div>
                <div class="col-auto item-aplicado" >
                  <p class="filtroAplicado" tabindex="0">Fecha desde: <span
                      class="filtroAplicadoDesc">DD/MM/AAAA</span></p>
                </div>
                <div class="col-auto item-aplicado" >
                  <p class="filtroAplicado" tabindex="0">Fecha hasta: <span
                      class="filtroAplicadoDesc">DD/MM/AAAA</span></p>
                </div>
                <div class="col-auto item-aplicado" *ngIf="marcadoresFiltrados.length > 0">
                  <p class="filtroAplicado" tabindex="0"> Marcadores:
                    <span class="filtroAplicadoDesc">Marcadores</span>
                  </p>
                </div>
                <!-- Botón Reiniciar Filtros -->
                <div class="col-auto filtroAplicado ">
                  <button type="button" class="btn btn-link ml-2 btn-reiniciar-filtros" aria-label="Limpiar filtros">Limpiar</button>
                </div>
              </div>
            </div>
            <!-- Fin Botón Reiniciar Filtros -->
            
          </fieldset>
  
        </div>
        <!-- Fin Filtros aplicados -->
      </div>
  
  
      <!--btn desplegable-->
      <div class="sec-boton-filtros">
        <button 
          class="btn btn-principal-outline btn-mostrar-filtros" 
          aria-label="mostrar filtros"
          (click)="collapseFilter()">

          <span class="material-symbols-outlined" style="font-size: 18px; margin-right: 5px;">filter_alt</span>
          Filtros
        </button> 
      </div> 

    </div>
    
    <!-- Filtros rápidos -->
    <div class="filtros-rapidos-inputs" [hidden]="collapsedFiltros">
      <ng-container >
        <div  [hidden]="filtro.fltCod != 'RESP' || banCod == 'PERS'" class="col-auto filtros-ancho--mobile div-chip" >
          <app-combobox-chip-autocomplete #comboBoxChipAutocompleteResponsables aria-label="usuario responsable"
            [elements]="usuariosNombres"
            (elementSelected)="changeUsuarioResponsable($event)"
            [label]="'Usuario Responsable'"
            [preselectedElement]="usuariosFiltroPreselected"
          ></app-combobox-chip-autocomplete>
        </div>
  
        <div 
          class="col-auto filtros-ancho--mobile div-chip"
          appearance="outline" style="margin-top: 3px; width: 229.19px;;"
        >
            <button class="btn boton-secundario" style="width: 100%;">
              {{usrResponsableSeleccionado?.descripcion}}
            </button>
        </div>
  
        <!-- (selectionChange)="filtrarListado($event)" -->
        <div class="col-auto filtros-ancho--mobile" >
          <mat-form-field appearance="outline" class="mat-form-field-format width100">
            <mat-select placeholder="Bandeja" [formControl]="bandejas" (selectionChange)="filtrarListado($event)">
              <mat-option  [value]="ban">
                {{ban.descr}}
              </mat-option>
            </mat-select>
          </mat-form-field>
        </div>
  
        <div  class="col-auto filtros-ancho--mobile">
          <mat-form-field appearance="outline" class="mat-form-field-format width100">
            <mat-select id="al-nivelesacceso" [formControl]="nivelesAcceso" (selectionChange)="selectChangeAcceso()"
              multiple aria-label="Nivel de acceso">
              <mat-select-trigger >
                <span>Acceso: Todos</span>
              </mat-select-trigger>
              <mat-option *ngFor="let nac of nivelesAccesoList" [value]="nac.descripcion">{{nac.descripcion}}</mat-option>
            </mat-select>
          </mat-form-field>
        </div>

  
        <div  class="col-auto filtros-ancho--mobile">
          <mat-form-field appearance="outline" class="mat-form-field-format width100">
            <mat-select id="al-tiposexp" [formControl]="tipoExp" (selectionChange)="selectChangeTipo()" multiple
              aria-label="Tipos Expedientes">
              <mat-select-trigger >
                <span>Tipo: Todos</span>
              </mat-select-trigger>
              <mat-option  [value]="tex.codigo">{{tex.codigo}}</mat-option>
            </mat-select>
          </mat-form-field>
        </div>

  
        <div class="col-auto filtros-ancho--mobile" >
          <mat-form-field  appearance="outline" class="mat-form-field-format width100">
            <input matInput type="text" numericInput
              min="0"
              placeholder="{{filtro.banFltJson?.label}}"
              attr.aria-label="{{filtro.banFltJson?.label}}"
              value="{{loteValue}}" maxlength="15"
              (input)="cambioFiltroLote($event)"
              (change)="setLoteValue($event)"
              autocomplete="off">
          </mat-form-field>
        </div>

  
        <div *ngIf="filtro.fltCod == 'MARCEXP'" class="col-auto filtros-ancho--mobile">
          <mat-form-field appearance="outline" class="mat-form-field-format width100">
            <mat-select id="al-marcadores" [formControl]="marcadores" (selectionChange)="selectChangeMarcador()" multiple
              aria-label="{{filtro.banFltJson?.label}}" placeholder="{{filtro.banFltJson?.label}}">
              <mat-select-trigger *ngIf="marcadores.value?.length == marcadoresList?.length">
                <span>{{filtro.banFltJson?.label}}: Todos</span>
              </mat-select-trigger>
              <mat-option *ngFor="let m of marcadoresList" [value]="m.codigo">{{m.descripcion}}</mat-option>
            </mat-select>
          </mat-form-field>
        </div>
  
        <div class="col-auto filtros-ancho--mobile div-chip" *ngIf="filtro.fltCod == 'USRSOR'">
          <app-combobox-chip-autocomplete #comboBoxChipAutocompleteUsuariosSorteado
            [elements]="usuariosSorteadosNombres"
            (elementSelected)="changeUsuarioSorteado($event)"
            [label]="descripcionSorteado"
            [preselectedElement]="usuariosSorteadosFiltroPreselected"
          ></app-combobox-chip-autocomplete>
        </div>
  
        <div class="col-auto filtros-ancho--mobile div-chip" *ngIf="filtro.fltCod == 'USRLOT'">
          <app-combobox-chip-autocomplete #comboBoxChipAutocompleteUsuariosLote
            [elements]="usuariosLoteNombres"
            (elementSelected)="changeUsuarioLote($event)"
            [label]="descripcionLote"
            [preselectedElement]="usuariosLoteFiltroPreselected"
          ></app-combobox-chip-autocomplete>
        </div>
  
        <div *ngIf="filtro.fltCod == 'LUPA' && cambioFiltro" class="col-auto">
          <button type="button" class="btn-search-filters" title="Buscar"
            (click)="find()"
          >
              <mat-icon class="btn-search-filters--icon">search</mat-icon>
          </button>
        </div>
      </ng-container>
    </div>
  </div>`,
    props: args,
  }),  
  
   
};

