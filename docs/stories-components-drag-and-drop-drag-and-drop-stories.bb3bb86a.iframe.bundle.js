(self.webpackChunktaskbox=self.webpackChunktaskbox||[]).push([[37],{"./src/stories/components/buttons/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_assets_CSS_Component_Styles_buttonprueba_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("-!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./buttonprueba.component.css"),_assets_CSS_Component_Styles_buttonprueba_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_assets_CSS_Component_Styles_buttonprueba_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0__),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ButtonComponent=class ButtonComponent{constructor(){this.buttonType="primary",this.size="",this.label="Button",this.icon="",this.showIcon=!0,this.onClick=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter}get classes(){let mode="";switch(this.buttonType){case"primary":mode="btn button-primary";break;case"primary-outline":mode="btn button-primary-outline";break;case"negative":mode="btn button-negative";break;case"negative-outline":mode="btn button-negative-outline";break;case"icon":mode="btn icon-button";break;case"link":mode="btn button-link"}return[mode,this.size?`btn-${this.size}`:""]}static#_=this.propDecorators={buttonType:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],icon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],showIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],onClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}]}};ButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"uni-button",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],template:'\n    \x3c!-- *ngIf="primary; else secondaryButton" --\x3e\n    <button\n      type="button"\n      (click)="onClick.emit($event)"\n      [ngClass]="classes"\n    ><span *ngIf="showIcon && icon" class="material-symbols-outlined button-icon">{{icon}}</span>\n    <span *ngIf="buttonType !== \'icon\'">{{ label }}</span>\n    </button>\n\n    \x3c!-- <ng-template #secondaryButton>\n      <button\n        type="button"\n        (click)="onClick.emit($event)"\n        [ngClass]="classes"\n      ><span *ngIf="showIcon && icon" class="material-symbols-outlined button-icon">{{icon}}</span>\n      {{ label }}\n      </button>\n    </ng-template> --\x3e\n  ',styles:[_assets_CSS_Component_Styles_buttonprueba_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default()]})],ButtonComponent);const __WEBPACK_DEFAULT_EXPORT__=ButtonComponent},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/components/drag-and-drop/drag-and-drop.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DragandDrop:()=>DragandDrop,__namedExportsOrder:()=>__namedExportsOrder,default:()=>drag_and_drop_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var cjs_ruleSet_1_rules_5_rules_0_oneOf_0_use_2_drag_and_drop_component=__webpack_require__("-!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./drag-and-drop.component.css"),cjs_ruleSet_1_rules_5_rules_0_oneOf_0_use_2_drag_and_drop_component_default=__webpack_require__.n(cjs_ruleSet_1_rules_5_rules_0_oneOf_0_use_2_drag_and_drop_component),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),button_component=__webpack_require__("./src/stories/components/buttons/button.component.ts");let DragAndDropComponent=class DragAndDropComponent{};DragAndDropComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"uni-drag-and-drop",standalone:!0,imports:[button_component.Z],template:'\n<form >\n    <div class="drag-and-drop-container" >\n        <div class="drag-and-drop-buttons">\n            <span class="material-symbols-outlined">cloud_upload</span>\n            <div class="">Arrastre Archivos aquí o</div>\n            <uni-button\n            buttonType="primary-outline"\n            showIcon="false"\n            label="Explore Archivos"\n            size="sm"\n            aria-label="Explore Archivos"\n            ></uni-button>\n            \x3c!-- USAR EN CASO DE NO TENER EL COMPONENTE --\x3e\n            \x3c!-- <button class="btn button-primary-outline btn-sm"  >Explore Archivos</button> --\x3e\n        </div>\n        <input type="file" name="avatars" hidden >\n    </div>\n</form>\n\n',styles:[cjs_ruleSet_1_rules_5_rules_0_oneOf_0_use_2_drag_and_drop_component_default()]})],DragAndDropComponent);const drag_and_drop_stories={title:"Uniframe/Components/Drag and Drop",component:DragAndDropComponent,tags:["autodocs"],render:args=>({props:args}),decorators:[(0,dist.moduleMetadata)({declarations:[],imports:[common.CommonModule]})]},DragandDrop={args:{},parameters:{docs:{source:{code:' \n      <div class="menu-modulos-container">\n      <button attr.aria-label="Expediente"\n        title="Expediente"\n        class="menu-modulo-button active">\n        <span class="material-symbols-outlined iconSize" id="icono-apps">\n            content_paste \n        </span>\n      </button>\n      <button attr.aria-label="Expediente"\n        title="Expediente"\n        class="menu-modulo-button ">\n        <span class="material-symbols-outlined iconSize" id="icono-apps">\n            content_paste \n        </span>\n      </button> \n      <button attr.aria-label="Expediente"\n        title="Expediente"\n        class="menu-modulo-button ">\n        <span class="material-symbols-outlined iconSize" id="icono-apps">\n            content_paste \n        </span>\n      </button>      \n  </div>\n'}}}};DragandDrop.parameters={...DragandDrop.parameters,docs:{...DragandDrop.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...DragandDrop.parameters?.docs?.source}}};const __namedExportsOrder=["DragandDrop"]},"-!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./buttonprueba.component.css":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"uni-button{\n    width: auto !important;\n} /* ajuste global para el componente en uso no abarque todo el ancho del espacio disponible  */\n\n.btn{\n    display: flex;\n    align-items: center;\n    padding:0.1rem 0.75rem;\n    width: auto;\n    height: -moz-fit-content;\n    height: fit-content;\n} /* ajuste global para todos los botones  */\n\n/* Boton primary outline  */\n\n.button-primary, .button-primary:not(:disabled){\n    background: var(--button-primary-background-color);\n    color:var(--button-primary-text-color) ;\n    border-color: var(--button-primary-border-color) ;\n}\n\n.button-primary:hover, .button-primary:first-child:active{\n    background: var(--button-primary-background-color-hover);\n    color:var( --button-primary-outline-text-color-hover) ;\n    border-color: var(--button-primary-outline-border-color-hover) ;\n}\n\n/* Fin Boton primary  */\n\n/*  Boton primary outline  */\n\n.button-primary-outline, .button-primary-outline:not(:disabled){\n    background: var(--button-primary-outline-background-color);\n    color:var(--button-primary-outline-text-color) ;\n    border-color: var(--button-primary-outline-border-color) ;\n    border: 1px solid;\n}\n\n.button-primary-outline:hover , .button-primary-outline:first-child:active{\n    background: var(--button-primary-outline-background-color-hover);\n    color:var( --button-primary-outline-text-color-hover) ;\n    border-color: var( --button-primary-outline-border-color-hover) ;\n}\n\n/* Fin Boton primary outline  */\n\n/* Boton negative  */\n\n.button-negative, .button-negative:not(:disabled){\n    background: var(--button-negative-background-color);\n    color:var(--button-negative-text-color) ;\n    border-color: var(--button-negative-border-color) ;\n}\n\n.button-negative:hover , .button-negative:first-child:active{\n    background: var(--button-negative-background-color-hover);\n    color:var( --button-negative-text-color) ;\n    border-color: var( --button-negative-border-color) ;\n}\n\n/* Fin Boton negative  */\n\n/* Boton negative outline */\n\n.button-negative-outline,.button-negative-outline:not(:disabled){\n    background: var(--button-negative-outline-background-color);\n    color:var(--button-negative-outline-text-color) ;\n    border-color: var(--button-negative-outline-border-color) ;\n    border: 1px solid;\n}\n\n.button-negative-outline:hover , .button-negative-outline:first-child:active{\n    background: var(--button-negative-outline-background-color-hover);\n    color:var(--button-negative-outline-text-color-hover) ;\n    border-color: var( --button-negative-border-color) ;\n}\n\n/* Fin Boton negative outline */\n\n\n/* boton solo con icono. NO TEXTO  */\n.icon-button {\n    padding: 0.3rem !important;\n    border-radius: 25px;\n}\n\n.icon-button .button-icon{\n    margin-right: 0 !important;\n}\n\n.icon-button:hover, .icon-button:active, :not(.btn-check)+.btn:active {\n    background-color: #e8eff3;\n    transition: 0.3s;\n    opacity: 1;\n    color: var(--bs-btn-color);\n}\n\n/* Fin boton solo con icono. NO TEXTO  */\n\n.button-link, .button-link:not(:disabled){\n    background: var(--button-primary-outline-background-color);\n    color:var(--button-primary-outline-text-color) ;\n}\n\n.button-link:hover , .button-link:first-child:active{\n    background: transparent;\n    color:var(--button-primary-link-text-color-hover) ;\n    text-decoration: underline;\n}\n\n.button-link:hover .button-icon , .button-link:first-child:active .button-icon{\n    text-decoration: none ;\n}\n\n/* icono dentro de los botones <span> */\n\n.button-icon{\n    margin-right: 8px;\n    height: auto;\n    line-height: inherit;\n}\n\n.btn-sm .button-icon{\n    font-size: 18px ;\n    margin-right: 4px;\n} /* acomoda el tamaño del icono en botones sm */\n\n/* Fin icono dentro de los botones <span> */\n\n\n\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"-!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./drag-and-drop.component.css":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".drag-and-drop-container{\n    border: #c3c3c3 1.8px dashed;\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    gap: 8px;\n}\n\n.drag-and-drop-buttons{\n    display: flex;\n    gap: 8px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);