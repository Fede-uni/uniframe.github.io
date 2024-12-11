import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { User } from 'src/stories/User';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatSidenavModule,CommonModule],
  template: `
  <nav  class="navbar navbar-expand-lg header" role="main">
    <a class="navbar-brand"  aria-label="Ir al inicio" title="Ir al inicio">
      <img class="header-logo " src="./assets/tramix CN hor-blanco.png" aria-label="Logo del sistema" alt="Logo del sistema">
    </a>
    <!-- Boton hamburguesa/mobile -->
    <button class="navbar-toggler header-button button-menu " type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Menú de navegación">
      <span class="material-symbols-outlined " aria-hidden="true">menu</span>
    </button>
    <!-- Fin Boton de menu -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <!-- AQUÍ COLOCAR EL BUSCADOR -->
    <!-- fIN BUSCADOR -->
      <span class="ms-auto header-buttons-group">
         <!--Aplicaciones-->
        <button [matMenuTriggerFor]="menu" class="btn header-button button-menu " aria-label="Módulos" title="Módulos"> 
          <span class="material-symbols-outlined button-icon " id="icono-apps">apps</span>
          <span aria-label="Ver más opciones"  class="material-symbols-outlined ">expand_more</span>
        </button>
        <mat-menu #menu="matMenu">
          <div class="header--apps-dropdown">            
            <div class="col-12 header--apps--align">
              <button class="btn button-apps-menu">
                <span class="material-symbols-outlined button-icon" id="icono-apps">library_books</span>
                <span class="btn-app-txt ml-2">Liquidaciones</span>
              </button>
            </div>            
          </div>
        </mat-menu>
        <!--Novedades-->
        <mat-drawer-container autosize class="header--drawer">
          <mat-drawer #sidenav mode="over" position="end" class="header--drawer--sidenav"> 
          </mat-drawer>              
          <div class="">
            <button id="novedades" aria-label="Novedades"  class="btn header-button " aria-label="Novedades" title="Novedades">                        
              <span aria-label="Novedades"  class="material-symbols-outlined button-icon " id="icono-usuario_mobile">notifications</span>
              <span class="badge rounded-pill badge-novedades bg-danger">10</span>
            </button>
          </div>              
        </mat-drawer-container>     
        <!--Helper-->
        <button  class="btn header-button" aria-label="Ayuda" title="Ayuda">
          <span aria-label="Ayuda" class="material-symbols-outlined button-icon" id="icono-apps">help_outline</span>
          <span aria-label="Ver más opciones" class="material-symbols-outlined ">expand_more</span>
        </button>
        <!--Datos de usuario-->
        <button  class="btn header-button" style="align-items: center;">
          <div class="me-2">
              <span class="user-text">Usuario: nombre usuario</span> 
          </div>
          <span aria-label="Datos del usuario" class="material-symbols-outlined button-icon" id="icono-usuario_mobile">account_circle</span>
          <span aria-label="Ver más opciones" class="material-symbols-outlined ">expand_more</span>
        </button>
      </span>
    </div>
  </nav>`,
  styleUrls: ['../../../assets/CSS/Component-Styles/headerprueba.component.css'],
})
export default class HeaderComponent {
  @Input()
  user: User | null = null;


}
