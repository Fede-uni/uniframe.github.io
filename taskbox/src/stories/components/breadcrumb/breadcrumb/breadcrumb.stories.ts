import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb.component';

const meta: Meta<BreadcrumbComponent> = {
  title: 'Uniframe/Components/Breadcrumb',
  component:BreadcrumbComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      
      imports: [CommonModule],
    }),
  ],

};

export default meta;
type Story = StoryObj<BreadcrumbComponent>;

export const Breadcumb: Story = {
  args: {
  },
};

Breadcumb.parameters = { 
  docs: { 
    source: { 
      code:`<div class="text-breadcrum">
  <a>
      <span class="contraste"> Organismo</span>
  </a>
  <span class="mx-1">/</span>
  <a >
      <span class="contraste"> Dependencia </span>
  </a>
  <span  class="mx-1">/</span>
  <label  attr.aria-label="Expediente ">
  Expediente  
  </label>
</div>`,
    }, 
  }, 
};
