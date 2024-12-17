import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface SubApp {
  appCod: string;
  appDescr: string;
  appIcon?: string;
  appVisible?: number;
  selected?: boolean;
  [key: string]: any; // Propiedades adicionales
}

@Component({
  selector: 'uni-menu-modulos',
  standalone: true,
  imports: [],
  templateUrl: './menu-modulos.component.html',
  styleUrls: ['../../../assets/CSS/Component-Styles/menu-modulos.component.css']
})
export class MenuModulosComponent {
  @Input() icon: string | null = '';  // Ícono recibido por el componente

  
}
