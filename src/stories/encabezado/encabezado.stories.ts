import {moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncabezadoComponent } from './encabezado.component';
import {MatDividerModule} from '@angular/material/divider';


const meta: Meta<EncabezadoComponent> = {
  title: 'Components/Encabezado',
  component: EncabezadoComponent,
   decorators: [
    moduleMetadata({
      imports: [CommonModule,BrowserAnimationsModule,MatDividerModule], // Usa CommonModule aquí
    }),
  ],
  tags: ['autodocs'],
 
};

export default meta;

type Story = StoryObj<EncabezadoComponent>;

export const header: Story = {
  render: (args) => ({
    template: `
    <div class="row encabezado-container">
        <div class="text-container">
            <div class="contenedor-navegacion-vistas">
                <div class="row subHeader_espacio-iconos margin-header">
                    <div class="secContenedor__titulo_exp secContenedor__titulo_exp--nowrap float-left">
                        <div class="text-breadcrum">
                            <a>
                                <span class="contraste"> Organismo</span>
                            </a>
                            <span class="mx-1">/</span>
                            <a >
                                <span class="contraste"> Dependencia </span>
                            </a>
                            <span  class="mx-1">/</span>
                            <label  attr.aria-label="Expediente {{titleExpediente}}">
                            Expediente  
                            </label>
                        </div>

                        <div class="row">
                            <div class="text-título">
                            Actuaciones de SECRETARÍA GENERAL CAYT 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- crear expediente -->

        <div class="btn-container">
            <button type="button" class="btn btn-primary btn-L " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Crear" aria-label="Crear elemento">
            <span class="material-symbols-outlined btn-icon me-1" aria-hidden="true">add_circle</span>
            <span class="btn-text" >Crear</span>
            </button>
        </div>
        <mat-divider class="encabezado-border mt-2"></mat-divider>
    </div>


     `,
    props: args,
  }),  
  
   
};

