import { ListaTarjetaComponent } from './lista-tarjetas.component';
import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


const meta: Meta<ListaTarjetaComponent> = {
  title: 'Example/Lista Tarjetas',
  component:ListaTarjetaComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      
      imports: [CommonModule,MatButtonModule,MatDividerModule],
    }),
  ],

};

export default meta;
type Story = StoryObj<ListaTarjetaComponent>;

export const ListaTarjeta: Story = {
  args: {
  },
};

ListaTarjeta.parameters = { 
  docs: { 
    source: { 
      code: ``,
    }, 
  }, 
};
