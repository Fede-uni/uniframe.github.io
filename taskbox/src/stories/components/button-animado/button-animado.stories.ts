import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { ButtonAnimadoComponent } from './button-animado.component';

const meta: Meta<ButtonAnimadoComponent> = {
  title: 'Uniframe/Components/button animado',
  component:ButtonAnimadoComponent,
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
type Story = StoryObj<ButtonAnimadoComponent>;

export const buttonanimado: Story = {
  args: {
  },
};

buttonanimado.parameters = { 
  docs: { 
    source: { 
      code: ` 
       /*BOTON IURIX MIND ANIMADO HTML*/
      <button class="logo-container btn btn-header_noFill header_cod-usuario--version">
    <svg width="78" height="77" viewBox="0 0 78 77" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 40px; width: 40px;">
      <path d="M0.985107 38.4395C0.985107 17.3297 18.098 0.216797 39.2078 0.216797C60.3176 0.216797 77.4305 17.3297 77.4305 38.4395C77.4305 59.5493 60.3176 76.6622 39.2078 76.6622H0.985107V38.4395Z" fill="#0C517A"/>
      </svg>
      
    <div class="animated-elements">
      <div class="bar" id="bar1"></div>
      <div class="bar" id="bar2"></div>
      <div class="bar" id="bar3"></div>
      <div class="bar" id="bar4"></div>
      <div class="bar" id="bar5"></div>
    </div>
  </button>
  

   /*BOTON IURIX MIND ANIMADO CSS*/
<style>
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 45px;
  }
  
  .animated-elements {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    height: 80%;
  }
  
  .bar {
    width: 3px;
    background-color: white;
    margin: 1px;
    transition: transform 0.5s ease-in-out;
  }
  
  /* altura de las barras individuales */
  #bar1 {
    height: 20%; 
  }
  
  #bar2 {
    height: 30%; 
  }
  
  #bar3 {
    height: 40%;
  }
  
  #bar4 {
    height: 30%; 
  }
  
  #bar5 {
    height: 20%; 
  }
  

  .logo-container:hover .bar {
    animation: grow 1s infinite ease-in-out;
  }
  
  
  @keyframes grow {
    0%, 100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(2); /* Escala más alta en el medio de la animación */
    }
  }
  
  
  #bar1 {
    animation-delay: 0s;
  }
  
  #bar2 {
    animation-delay: 0.2s;
  }
  
  #bar3 {
    animation-delay: 0.4s;
  }
  
  #bar4 {
    animation-delay: 0.6s;
  }
  
  #bar5 {
    animation-delay: 0.8s;
  }
  </style>

  `,
    }, 
    
  }, 
  
};