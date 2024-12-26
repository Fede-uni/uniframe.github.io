import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { DesplegableComponent } from './desplegable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<DesplegableComponent> = {
  title: 'Uniframe/Components/Desplegables',
  component:DesplegableComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, BrowserAnimationsModule],
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
     <mat-expansion-panel >
      <mat-expansion-panel-header >
        <span>Titulo de Desplegable</span>
      </mat-expansion-panel-header>
      <div>
        Contenido del desplegable
      </div>
  </mat-expansion-panel>
  
`,
    }, 
  }, 
};