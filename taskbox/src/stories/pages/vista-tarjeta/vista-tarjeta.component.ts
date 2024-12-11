import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTarjetaComponent } from 'src/stories/sections/lista-tarjetas/lista-tarjetas.component';
import { FichaComponent } from 'src/stories/sections/ficha/ficha.component';
import HeaderComponent from 'src/stories/components/header/header.component';
import EncabezadoComponent from 'src/stories/sections/encabezado/encabezado.component';
import { FiltrosRapidosComponent } from '../../sections/filtros-rapidos/filtros-rapidos/filtros-rapidos.component';



@Component({
  selector: 'app-contenedor-vista-tarjeta',
  styleUrl: '../../../assets/CSS/Component-Styles/vista-tarjeta.css',
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
