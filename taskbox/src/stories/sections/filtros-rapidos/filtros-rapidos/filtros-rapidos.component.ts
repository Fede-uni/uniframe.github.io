import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import ButtonComponent from '../../../components/buttons/button.component';
import { FiltrosAplicadosComponent } from 'src/stories/components/filtros-aplicados/filtros-aplicados.component';


@Component({
  selector: 'uni-filtros-rapidos',
  standalone: true, // Si este componente es standalone
  imports: [CommonModule,MatFormFieldModule, MatSelectModule,ButtonComponent,FiltrosAplicadosComponent],
  styleUrls: ['../../../../assets/CSS/Component-Styles/filtros-rapidos.component.css'],
  templateUrl: './filtros-rapidos.component.html',
})
export class FiltrosRapidosComponent {
  public collapsedFiltros: boolean = false;

  public collapseFilter(): void {
    this.collapsedFiltros = !this.collapsedFiltros;
  }

}
