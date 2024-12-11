import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-filtros-rapidos',
  standalone: true, // Si este componente es standalone
  imports: [CommonModule,MatFormFieldModule, MatSelectModule,],
  templateUrl: './filtros-rapidos.component.html',
  styleUrls: ['../../../../assets/CSS/Component-Styles/filtros-rapidos.component.css']
})
export class FiltrosRapidosComponent {
  public collapsedFiltros: boolean = false;

  public collapseFilter(): void {
    this.collapsedFiltros = !this.collapsedFiltros;
  }

}
