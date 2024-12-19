import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import HeaderComponent from './header.component';


const meta: Meta<HeaderComponent> = {
  title: 'Uniframe/Components/Header',
  component:HeaderComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule,MatButtonModule,MatMenuModule, BrowserAnimationsModule ],
    }),
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Header: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

Header.parameters = { 
  docs: { 
    source: { 
      code: `<nav  class="navbar navbar-expand-lg header" role="main">
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
        <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
        <!-- <button class="logo-container btn btn-header_noFill header_cod-usuario--version">
        <svg width="78" height="77" viewBox="0 0 78 77" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 40px; width: 40px;">
          <path d="M0.985107 38.4395C0.985107 17.3297 18.098 0.216797 39.2078 0.216797C60.3176 0.216797 77.4305 17.3297 77.4305 38.4395C77.4305 59.5493 60.3176 76.6622 39.2078 76.6622H0.985107V38.4395Z" fill="#0C517A"/>
          </svg>
          
        <div class="animated-elements">
          <div class="bar" id="bar1"></div>
          <div class="bar" id="bar2"></div>
          <div class="bar" id="bar3"></div>
          <div class="bar" id="bar4"></div>
          <div class="bar" id="bar5"></div>
        </div>
      </button> -->
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
    }, 
  }, 
};


