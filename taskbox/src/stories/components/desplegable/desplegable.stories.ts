import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { DesplegableComponent } from './desplegable.component';

const meta: Meta<DesplegableComponent> = {
  title: 'Uniframe/Components/Desplegables',
  component:DesplegableComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule,],
    }),
  ],

};

export default meta;
type Story = StoryObj<DesplegableComponent>;

export const Dresplegable: Story = {
  args: {
  },
};

Dresplegable.parameters = { 
  docs: { 
    source: { 
      code: ` 
      <div class="menu-modulos-container">
      <button attr.aria-label="Expediente"
        title="Expediente"
        class="menu-modulo-button active">
        <span class="material-symbols-outlined iconSize" id="icono-apps">
            content_paste 
        </span>
      </button>
      <button attr.aria-label="Expediente"
        title="Expediente"
        class="menu-modulo-button ">
        <span class="material-symbols-outlined iconSize" id="icono-apps">
            content_paste 
        </span>
      </button> 
      <button attr.aria-label="Expediente"
        title="Expediente"
        class="menu-modulo-button ">
        <span class="material-symbols-outlined iconSize" id="icono-apps">
            content_paste 
        </span>
      </button>      
  </div>
`,
    }, 
  }, 
};