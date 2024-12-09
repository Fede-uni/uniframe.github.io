import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTarjetaComponent } from './tarjetas/lista-tarjetas/lista-tarjetas.component';
import { FichaComponent } from './ficha/ficha.component';
import { FiltrosRapidosComponent } from '../filtros-rapidos/filtros-rapidos/filtros-rapidos.component';
import HeaderComponent from '../header.component';
import EncabezadoComponent from '../encabezado/encabezado.component';



@Component({
  selector: 'app-contenedor-vista-tarjeta',
  styleUrl: '../../assets/CSS/Component-Styles/vista-tarjeta.css',
  templateUrl:'./vista-tarjetas.component.html' ,
  standalone: true, // Si este componente es standalone
  imports: [ListaTarjetaComponent,FichaComponent, CommonModule,FiltrosRapidosComponent, HeaderComponent, EncabezadoComponent,], // Importa ambos componentes
  
  
})
export class VistaTarjetaComponent {
    public collapsedPanel: boolean = false;

    public collapsePanel(): void {
      this.collapsedPanel = !this.collapsedPanel;
    }
}
