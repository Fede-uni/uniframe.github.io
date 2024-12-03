import { Component } from '@angular/core';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-lista-tarjeta',
  styleUrl: '../../../assets/CSS/Component-Styles/lista-tarjeta-component.css',
  standalone: true,
  imports: [TarjetaComponent,MatDividerModule,MatPaginatorModule,MatCheckboxModule],
  template: `
  <fieldset class="h-100"  aria-label="lista de expedientes formato tarjeta" >
      <div class="sec-encabezado-lista-tarjeta">
        <!-- Check de seleccinar toda la lista -->
        <div class=" me-3">
          <input  type="checkbox" value="option1" aria-label="Seleccionar toda la lista">
        </div>  
        <div class="d-flex align-items-center w-100 gap-3">
          <!-- Botón acciones -->
          <button id="al-crear"  class="btn button-primary-outline btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Acciones a realizar con la selección actual">
          <span class="material-symbols-outlined  button-icon">task_alt</span>Acciones</button>
          <!-- Lista acciones -->
          <ul id="al-dropdown-menu" class="dropdown-menu dropdown-menu-right" role="menu" style="cursor: pointer">
              <li mat-menu-item  class="dropdown-item-size">
                  <a id="cambioMandatario" class="dropdown-item" style="padding: 0.4rem 1.5rem !important"
                      title="Cambiar Mandatario" >
                      Acción disponible
                  </a>
              </li>
          </ul>
          <span class="pl-2" style="font-size: 12px;">
            10 seleccionadas
          </span>
        </div> 
        <!-- Botón aactualizar -->
        <button id="lis-actualizarBoton"  class="btn icon-button " title="Actualizar">
          <span id="lis-actualizar" class="material-icons" aria-hidden="true">autorenew</span>
        </button>
      </div>
      <mat-divider style="border-top-color: var(--color-neutro-200);"></mat-divider>
      <div id="content-lista-tarjetas">
          <div aria-label="lista de documentos formato tarjeta" class="tabla-lista-tarjetas">
              <app-tarjeta></app-tarjeta>
              <app-tarjeta></app-tarjeta>
              <app-tarjeta></app-tarjeta>
          </div>   
      </div> 
      <div class="d-flex" style="border-top: 1px solid var(--color-neutro-200); justify-content: flex-end;">
          <mat-paginator #paginator id="width_mobile" [pageSizeOptions]="[15,30,45,100]" >
          </mat-paginator>  
      </div>
</fieldset>`,
  

})
export class ListaTarjetaComponent {

}