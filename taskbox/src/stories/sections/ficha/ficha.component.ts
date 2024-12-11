import { Component } from '@angular/core';


@Component({
  selector: 'app-ficha',
  templateUrl: './fIcha.component.html',
  styleUrls: ['../../../assets/CSS/Component-Styles/ficha.component.css'],
  standalone: true,
})
export class FichaComponent {
  public collapsedFiltros: boolean = false;

  public collapseFilter(): void {
    this.collapsedFiltros = !this.collapsedFiltros;
  }

}