import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { FiltrosAplicadosComponent } from './filtros-aplicados.component';

const meta: Meta<FiltrosAplicadosComponent> = {
  title: 'Uniframe/Components/Filtros Aplicados',
  component:FiltrosAplicadosComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [CommonModule,],
    }),
  ],

};

export default meta;
type Story = StoryObj<FiltrosAplicadosComponent>;

export const FiltrosAplicados: Story = {
  args: {
  },
};

FiltrosAplicados.parameters = { 
  docs: { 
    source: { 
      code: `<div class="contenedor-filtros-aplicados">
  <div class="col-auto">
    <p class="filtroAplicado">Filtros Aplicados ></p>
  </div>
  <div class="col-auto item-aplicado">
    <p class="filtroAplicado" tabindex="0">Bandeja: <span class="filtroAplicadoDesc">Bandeja seleccionada</span></p>
  </div>
  <div class="col-auto item-aplicado">
    <p class="filtroAplicado">Incluir asignados: <span class="filtroAplicadoDesc">Sí</span></p>
  </div>
  <div class="col-auto item-aplicado" >
    <p class="filtroAplicado" tabindex="0">Tipos: <span class="filtroAplicadoDesc">Todos</span></p>
  </div>
  <div class="col-auto item-aplicado" >
    <p class="filtroAplicado" tabindex="0">Estados: <span class="filtroAplicadoDesc">Todos</span>
    </p>
  </div>
  <div class="col-auto item-aplicado">
    <p class="filtroAplicado" tabindex="0">Acceso: <span class="filtroAplicadoDesc">Todos</span></p>
  </div>
  <div class="col-auto filtroAplicado ">
    <uni-button buttonType="link"  showIcon="false" label="Limpiar" size="sm" aria-label="Limpiar filtros"></uni-button>
     <!-- USAR EN CASO DE NO TENER EL COMPONENTE -->
    <!-- <button type="button" class="btn button-link ml-2 btn-sm" aria-label="Limpiar filtros">Limpiar</button> -->
  </div>
</div>`,
    }, 
  }, 
};




