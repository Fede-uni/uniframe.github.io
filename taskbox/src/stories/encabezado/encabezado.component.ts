import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-encabezado',
  template: `<div class="row encabezado-container">
  <div class="text-container">
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

                  <div class="row mt-1">
                      <div class="text-título">
                      Actuaciones de SECRETARÍA GENERAL CAYT 
                      </div>
                  </div>
  </div>

  <!-- crear expediente -->

  <div class="btn-container">
      <button class="btn button-primary"><!-- esto se reemplazaría por un <uni-button> -->
        <span class="material-symbols-outlined button-icon">add_circle</span>
        Crear
      </button>
  </div>
  <mat-divider class="encabezado-border mt-3"></mat-divider>
</div>
`,
  styleUrls: ['../../assets/CSS/Component-Styles/encabezado.component.css'],
})
export default class EncabezadoComponent {
 
}
