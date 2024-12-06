import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import HeaderComponent from '../stories/header.component';
import EncabezadoComponent from 'src/stories/encabezado/encabezado.component';

import { EtiquetasComponent } from 'src/stories/etiquetas/etiqueta.component';


import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { FiltrosRapidosComponent } from 'src/stories/filtros-rapidos/filtros-rapidos/filtros-rapidos.component';
import ButtonComponent from 'src/stories/button.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { TarjetaComponent } from '../stories/vista-tarjeta/tarjetas/tarjeta/tarjeta.component';
import { ListaTarjetaComponent } from '../stories/vista-tarjeta/tarjetas/lista-tarjetas/lista-tarjetas.component';
import { CustomComponentModule } from './custom.module';
import { VistaTarjetaComponent } from '../stories/vista-tarjeta/vista-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CustomComponentModule,
    VistaTarjetaComponent
    
  ],
  exports:[
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
