import type { Meta, StoryObj } from '@storybook/angular';
import Button from './button.component';

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
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<Button>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  render: (args) => ({
    template: `<button  mat-flat-button type="button" class="btn-primary">{{ label }}</button>`,
    props: args,
  }),
  args: {
    primary: true,  // El botón se renderiza como mat-flat-button
    label: 'Primary Button',
  },
};

// Historia para el botón secundario (mat-stroked-button)
export const Secondary: Story = {
  render: (args) => ({
    template: `<button mat-stroked-button type="button" class="btn-primary-outline">{{ label }}</button>`,
    props: args,
  }),
  args: {
    primary: false,  // El botón se renderiza como mat-stroked-button
    label: 'Secondary Button',
  },
};

// Historia para un botón grande
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
