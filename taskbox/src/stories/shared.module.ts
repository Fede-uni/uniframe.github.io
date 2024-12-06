// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes compartidos
import HeaderComponent from './header.component';
import EncabezadoComponent from './encabezado/encabezado.component';
import { FiltrosRapidosComponent } from '../stories/filtros-rapidos/filtros-rapidos/filtros-rapidos.component';
import { EtiquetasComponent } from '../stories/etiquetas/etiqueta.component';
import ButtonComponent from './button.component';
import { FichaComponent } from '../stories/vista-tarjeta/ficha/ficha.component';
import { TarjetaComponent } from '../stories/vista-tarjeta/tarjetas/tarjeta/tarjeta.component';
import { ListaTarjetaComponent } from '../stories/vista-tarjeta/tarjetas/lista-tarjetas/lista-tarjetas.component';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    EncabezadoComponent,
    FiltrosRapidosComponent,
    EtiquetasComponent,
    ButtonComponent,
    FichaComponent,
    TarjetaComponent,
    ListaTarjetaComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    EncabezadoComponent,
    FiltrosRapidosComponent,
    EtiquetasComponent,
    ButtonComponent,
    FichaComponent,
    TarjetaComponent,
    ListaTarjetaComponent,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
  ],
})
export class SharedModule {}
