import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'lib-encabezado',
  standalone: true,
  imports: [ CommonModule, MatSidenavModule,MatMenuModule],
  template: `
    
  `,
  styleUrls: ['../../assets/CSS/Component-Styles/headerprueba.component.css']
})
export class EncabezadoComponent {
  
}
