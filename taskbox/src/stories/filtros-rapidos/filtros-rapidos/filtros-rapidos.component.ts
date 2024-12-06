import { Component } from '@angular/core';


@Component({
  selector: 'app-filtros-rapidos',
  templateUrl: './filtros-rapidos.component.html',
  styleUrls: ['../../../assets/CSS/Component-Styles/filtros-rapidos.component.css']
})
export class FiltrosRapidosComponent {
  public collapsedFiltros: boolean = false;

  public collapseFilter(): void {
    this.collapsedFiltros = !this.collapsedFiltros;
  }

}
