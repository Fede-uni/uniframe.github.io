import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  template: ` <div id="content-listaExp">
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
            </span><!-- esto se reemplazaría por un <uni-etiqueta> -->
            <span 
                class="etiqueta-estado" 
                mat-raised-button placement="right">
                etiqueta
            </span><!-- esto se reemplazaría por un <uni-etiqueta> -->
          </div>
        </div>

         <!-- open new_tab -->
         <div style="padding: 3px 10px;">
          <a id="la-nuevaPestania" class="btn icon-button btn-sm" title="Abrir en nueva pestaña" tabindex="0">
            <span class="material-symbols-outlined button-icon" aria-hidden="true">open_in_new</span><!-- esto se reemplazaría por un <uni-button> [buttonType]="'icon'"  -->
          </a>
        </div>
      </div>
      <!-- <mat-divider class="col-12 mt-2" style="border-top-color: var(--color-neutro-200);"></mat-divider> -->
    </div>

  </div>
</div>`,
  styleUrl: '../../../assets/CSS/Component-Styles/tarjeta.component.css',
  standalone: true,
})
export class TarjetaComponent {

}
