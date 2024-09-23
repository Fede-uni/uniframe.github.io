import type { Meta, StoryObj, } from '@storybook/angular';
import Button from './button.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  render: (args: Button) => ({ 
    props: {
      backgroundColor: null,
      ...args,
    },
    moduleMetadata: { // Aquí se agregan los módulos necesarios
      declarations: [Button], // Declarar el componente si no es standalone
      imports: [CommonModule, MatButtonModule], // Importar módulos necesarios
    },
  }),
  argTypes: {
    label: { control: 'text', defaultValue: 'Button' },
    icon: { 
      control: 'text',
      description: 'El nombre del icono de Material Symbols a mostrar',
      defaultValue: 'check_circle',  // Ícono predeterminado
    },
    showIcon: { 
      control: 'boolean',
      description: 'Mostrar o no el icono',
      defaultValue: true,  // Muestra el ícono por defecto
    },
    buttonType: {
      control: 'radio',
      options: ['primary', 'primary-outline', 'negative', 'negative-outline'],
      description: 'El tipo de botón a mostrar',
    },
  },
  
};

export default meta;
type Story = StoryObj<Button>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    /* primary: true, */  // El botón se renderiza como mat-flat-button
    label: 'Primary Button',
    icon: 'check_circle',
    showIcon: true,
    buttonType: 'primary',
  },
};

Primary.parameters = { 
  docs: { 
    source: { 
      code: `<button  class="btn button-primary"><span class="material-symbols-outlined button-icon">check_circle</span>Primary Button</button>`,
    }, 
  }, 
};

// Historia para el botón secundario (mat-stroked-button)
export const PrimaryOutline: Story = {
  args: {
   /*  primary: false, */  // El botón se renderiza como mat-stroked-button
    label: 'Primary Outline Button',
    icon: 'check_circle',
    showIcon: true,
    buttonType: 'primary-outline',
  },
};

PrimaryOutline.parameters = { 
  docs: { 
    source: { 
      code: `<button  class="btn button-primary-outline"><span class="material-symbols-outlined  button-icon">check_circle</span>Primary outline Button</button>`,
    }, 
  }, 
};

export const Negative: Story = {
  args: {
   /*  primary: false, */  // El botón se renderiza como mat-stroked-button
    label: 'Negative Button',
    icon: 'check_circle',
    showIcon: true,
    buttonType: 'negative',
  },
};

Negative.parameters = { 
  docs: { 
    source: { 
      code: `<button  class="btn button-negative"><span class="material-symbols-outlined button-icon">check_circle</span>Negative Button</button>`,
    }, 
  }, 
};

export const NegativeOutline: Story = {
  args: {
   /*  primary: false, */  // El botón se renderiza como mat-stroked-button
    label: 'Negative Outline Button',
    icon: 'check_circle',
    showIcon: true,
    buttonType: 'negative-outline',
  },
};

NegativeOutline.parameters = { 
  docs: { 
    source: { 
      code: `<button  class="btn button-negative-outline"><span class="material-symbols-outlined button-icon">check_circle</span>Negative Outline Button</button>`,
    }, 
  }, 
};

/* // Historia para un botón grande
export const Large: Story = {
  args: {
    primary: true,
    size: 'large',
    label: 'Large Button',
  },
};

// Historia para un botón pequeño
export const Small: Story = {
  args: {
    primary: true,
    size: 'small',
    label: 'Small Button',
  },
};
 */