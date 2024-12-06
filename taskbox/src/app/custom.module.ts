import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import HeaderComponent from '../stories/header.component';
import EncabezadoComponent from 'src/stories/encabezado/encabezado.component';
import { EtiquetasComponent } from 'src/stories/etiquetas/etiqueta.component';
import { FiltrosRapidosComponent } from 'src/stories/filtros-rapidos/filtros-rapidos/filtros-rapidos.component';
import ButtonComponent from 'src/stories/button.component';
import { TarjetaComponent } from '../stories/vista-tarjeta/tarjetas/tarjeta/tarjeta.component';
import { ListaTarjetaComponent } from '../stories/vista-tarjeta/tarjetas/lista-tarjetas/lista-tarjetas.component';




import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent,
    EncabezadoComponent,
    FiltrosRapidosComponent,
    EtiquetasComponent,
    ButtonComponent,
    
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

    TarjetaComponent,
    ListaTarjetaComponent,
    
    
  ],
  exports:[
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    HeaderComponent,
    EncabezadoComponent,
    FiltrosRapidosComponent,
    EtiquetasComponent,
    ButtonComponent,
  ],
})
export class CustomComponentModule { }