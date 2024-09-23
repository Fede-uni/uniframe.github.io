import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { TarjetaComponent } from './tarjeta.component';

const meta: Meta<TarjetaComponent> = {
  title: 'Example/Tarjetas',
  component:TarjetaComponent,
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
type Story = StoryObj<TarjetaComponent>;

export const Tarjeta: Story = {
  args: {
  },
};

Tarjeta.parameters = { 
  docs: { 
    source: { 
      code: ``,
    }, 
  }, 
};



