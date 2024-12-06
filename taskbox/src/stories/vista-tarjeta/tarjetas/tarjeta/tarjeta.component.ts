import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  styleUrl: '../../../../assets/CSS/Component-Styles/tarjeta.component.css',
  standalone: true,
  template: ` 
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
            <span 
                class="etiqueta-estado" 
                mat-raised-button placement="right">
                etiqueta
            </span><!-- esto se reemplazaría por un <uni-etiqueta> -->
            <span 
                class="etiqueta-estado" 
                mat-raised-button placement="right">
                etiqueta
            </span><!-- esto se reemplazaría por un <uni-etiqueta> -->
          </div>
        </div>

      </div>
      <!-- Seccion boton desacoplar -->
      <div class="tarjeta-secdesacoplar">
        <a  class="btn icon-button btn-sm" title="Abrir en nueva pestaña" tabindex="0">
          <span class="material-symbols-outlined button-icon" aria-hidden="true">open_in_new</span>
        </a><!-- esto se reemplazaría por un <uni-button> [buttonType]="'icon'"  -->
      </div>
    </div>
`,
  
})
export class TarjetaComponent {

}
