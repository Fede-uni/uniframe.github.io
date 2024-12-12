import { Component } from '@angular/core';
import ButtonComponent from '../buttons/button.component';

@Component({
  selector: 'uni-filtros-aplicados',
  standalone: true,
  imports: [ButtonComponent],
  styleUrl: './../../../assets/CSS/Component-Styles/filtros-rapidos.component.css',
  template: `<div class="contenedor-filtros-aplicados">
  <div class="col-auto">
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
    <uni-button buttonType="link"  showIcon="false" label="Limpiar" size="sm" aria-label="Limpiar filtros"></uni-button>
     <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
    <!-- <button type="button" class="btn button-link ml-2 btn-sm" aria-label="Limpiar filtros">Limpiar</button> -->
  </div>
</div>`,
})
export class FiltrosAplicadosComponent {

}
