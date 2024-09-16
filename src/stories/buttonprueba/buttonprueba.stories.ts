import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './buttonprueba.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    Class: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  render: (args) => ({
    template: `<button type="button" class="btn btn-primary">{{ label }}</button>`,
    props: args,
  }),  
  args: {
    label: 'Primary Button',
    Class: 'btn btn-primary',
  },
  
};

export const OutlinePrimary: Story = {
  render: (args) => ({
    template: `<button type="button" class="btn btn-primary-outline">{{ label }}</button>`,
    props: args,
  }), 
  args: {
    label: 'Outline Primary',
    Class: 'btn btn-primary-outline',
  },
  
};

export const Negative: Story = {
  render: (args) => ({
    template: `<button type="button" class="btn btn-negative">{{ label }}</button>`,
    props: args,
  }), 
  
    args: {
      label: 'Negative',
      Class: 'btn btn-negative',
    },
  };

  export const OutlineNegative: Story = {
    render: (args) => ({
      template: `<button type="button" class="btn btn-negative-outline">{{ label }}</button>`,
      props: args,
    }), 
    args: {
      label: 'Outline Negative',
      Class: 'btn btn-negative-outline',
    },
  };

 
