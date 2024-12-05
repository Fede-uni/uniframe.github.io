import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import HeaderComponent from '../stories/header.component';
import EncabezadoComponent from 'src/stories/encabezado/encabezado.component';
import { TarjetaComponent } from 'src/stories/tarjetas/tarjeta/tarjeta.component';
import { EtiquetasComponent } from 'src/stories/etiquetas/etiqueta.component';


import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { FiltrosRapidosComponent } from 'src/stories/filtros-rapidos/filtros-rapidos/filtros-rapidos.component';
import ButtonComponent from 'src/stories/button.component';
import { ListaTarjetaComponent } from 'src/stories/tarjetas/lista-tarjetas/lista-tarjetas.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EncabezadoComponent,
    FiltrosRapidosComponent,
    EtiquetasComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
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
    ButtonComponent,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
