import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { BreadcrumbComponent } from 'src/stories/components/breadcrumb/breadcrumb/breadcrumb.component';
import ButtonComponent from '../../components/buttons/button.component';


@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [MatDivider,BreadcrumbComponent, ButtonComponent],
  template: `<div class="row encabezado-container">
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
  styleUrls: ['../../../assets/CSS/Component-Styles/encabezado.component.css'],
})
export default class EncabezadoComponent {
 
}
