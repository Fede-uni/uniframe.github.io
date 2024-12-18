import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


import { EtiquetasComponent } from './etiqueta.component';


const meta: Meta<EtiquetasComponent> = {
  title: 'Uniframe/Components/etiqueta',
  component:EtiquetasComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule,MatButtonModule,MatDividerModule,EtiquetasComponent],
    }),
  ],
  argTypes: {
    label: { control: 'text', defaultValue: 'Etiqueta' },}
};

export default meta;
type Story = StoryObj<EtiquetasComponent>;

export const Etiqueta: Story = {
  
};

Etiqueta.parameters = { 
  docs: { 
    source: { 
      code: ` <span 
      class="etiqueta-estado" 
      mat-raised-button placement="right">
  </span>`,
    }, 
  }, 
};




