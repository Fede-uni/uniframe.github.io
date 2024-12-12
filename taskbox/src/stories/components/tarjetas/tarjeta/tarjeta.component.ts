import { Component } from '@angular/core';
import { EtiquetasComponent } from '../../etiquetas/etiqueta.component';
import ButtonComponent from '../../buttons/button.component';

@Component({
  selector: 'app-tarjeta',
  styleUrl: '../../../../assets/CSS/Component-Styles/tarjeta.component.css',
  standalone: true,
  imports: [EtiquetasComponent, ButtonComponent],
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
  
})
export class TarjetaComponent {

}
