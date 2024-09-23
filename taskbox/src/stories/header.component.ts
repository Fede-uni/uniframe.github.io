import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { User } from './User';


@Component({
  selector: 'storybook-header',
  template: `<!-- <header>
    <div class="wrapper">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
        
      </div>
      <div>
        <div *ngIf="user">
          <span class="welcome">
            Welcome, <b>{{ user.name }}</b
            >!
          </span>
          <uni-button
            *ngIf="user"
            size="small"
            (onClick)="onLogout.emit($event)"
            label="Log out"
          ></uni-button>
        </div>
        <div *ngIf="!user">
          <uni-button
            *ngIf="!user"
            size="small"
            class="margin-left"
            (onClick)="onLogin.emit($event)"
            label="Log in"
          ></uni-button>
          <uni-button
            *ngIf="!user"
            primary
            size="small"
            primary="true"
            class="margin-left"
            (onClick)="onCreateAccount.emit($event)"
            label="Sign up"
          ></uni-button>
        </div>
      </div>
    </div>
  </header> -->
  <nav  class="navbar navbar-expand-lg header" role="main">
    <a class="navbar-brand"  aria-label="Ir al inicio" title="Ir al inicio">
      <img class="header-logo " src="assets/img/tramix-CN-hor-blanco.png" aria-label="Logo del sistema" alt="Logo del sistema">
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
        <button [matMenuTriggerFor]="menu" class="button-primary " aria-label="Módulos" title="Módulos"> 
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
  styleUrls: ['./header.css'],
})
export default class HeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
