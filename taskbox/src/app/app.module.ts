import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import HeaderComponent from '../stories/header.component';
import EncabezadoComponent from 'src/stories/encabezado/encabezado.component';
import { TarjetaComponent } from 'src/stories/tarjetas/tarjeta/tarjeta.component';


import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { FiltrosRapidosComponent } from 'src/stories/filtros-rapidos/filtros-rapidos/filtros-rapidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EncabezadoComponent,
    TarjetaComponent,
    FiltrosRapidosComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule
  ],
  exports:[
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
