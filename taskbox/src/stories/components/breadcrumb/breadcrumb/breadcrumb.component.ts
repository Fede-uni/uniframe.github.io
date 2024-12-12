import { Component } from '@angular/core';

@Component({
  selector: 'uni-breadcrumb',
  standalone: true,
  imports: [],
  template: `<div class="text-breadcrum">
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
  styleUrl: '../../../../assets/CSS/Component-Styles/encabezado.component.css'
})
export class BreadcrumbComponent {

}
