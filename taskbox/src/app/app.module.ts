import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';


import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';


import HeaderComponent from 'src/stories/components/header/header.component';
import EncabezadoComponent from 'src/stories/sections/encabezado/encabezado.component';
import { FiltrosRapidosComponent } from 'src/stories/sections/filtros-rapidos/filtros-rapidos/filtros-rapidos.component';
import { ListaTarjetaComponent } from 'src/stories/sections/lista-tarjetas/lista-tarjetas.component';
import { FichaComponent } from 'src/stories/sections/ficha/ficha.component';
import ButtonComponent from 'src/stories/components/buttons/button.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,

    HeaderComponent,
    EncabezadoComponent,
    FiltrosRapidosComponent,
    ListaTarjetaComponent,
    FichaComponent,
    ButtonComponent,
  ],
  exports:[
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
