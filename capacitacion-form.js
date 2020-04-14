import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles, } from '@cells-components/cells-lit-helpers/cells-lit-helpers.js';
import styles from './capacitacion-form-styles.js';
import '@bbva-web-components/bbva-form-text';
import '@bbva-web-components/bbva-button-default';
import '@capacitacion-cells/capacitacion-behavior';
/**
This component ...

Example:

```html
<capacitacion-form></capacitacion-form>
```

##styling-doc

@customElement capacitacion-form
@polymer
@LitElement
@demo demo/index.html
*/
const utilBehavior = CellsBehaviors.capacitacionBehavior;
export class CapacitacionForm extends utilBehavior(LitElement) {
  static get is() {
    return 'capacitacion-form';
  }

  // Declare properties
  static get properties() {
    return {
      persona: { type: Object }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.persona = {};
  }

  static get shadyStyles() {
    return `
      ${styles.cssText}
      ${getComponentSharedStyles('capacitacion-form-shared-styles').cssText}
    `;
  }

  payload(field, value) {
    this.persona[field] = value;
    this.requestUpdate();
  }

  reset() {
    this.persona = {};
    this.requestUpdate();
  }

  registrar() {
    console.log('PayLoad[Persona]=', JSON.stringify(this.persona));
    this.dispatch('crear-persona-event', this.persona);
  }

  // Define a template
  render() {
    return html`
      <style>${this.constructor.shadyStyles}</style>
      <slot></slot>
      <bbva-form-text
        value = "${this.extract(this.persona,'nombres','')}"
        @input = ${(e)=>this.payload('nombres', e.path[0].value)}
        label="Nombres"
      ></bbva-form-text>

      <bbva-form-text
        value = "${this.extract(this.persona,'apellidos','')}"
        @input = ${(e)=>this.payload('apellidos', e.path[0].value)}
        label="Apellidos"
      ></bbva-form-text>

      <bbva-form-text
        value = "${this.extract(this.persona,'dni','')}"
        @input = ${(e)=>this.payload('dni', e.path[0].value)}
        label="Dni"
        allowed-pattern="[0-9]"
        pattern="\d{3}"
      ></bbva-form-text>

      <bbva-form-text
        value = "${this.extract(this.persona,'telefono','')}"
        @input = ${(e)=>this.payload('telefono', e.path[0].value)}
        label="Teléfono"
      ></bbva-form-text>

      <bbva-form-text
        value = "${this.extract(this.persona,'email','')}"
        @input = ${(e)=>this.payload('email', e.path[0].value)}
        label="Correo electrónico"
      ></bbva-form-text>

      <div class = "container-buttons">
        <bbva-button-default @click = ${this.reset} class = "secondary" text="Cancelar"></bbva-button-default>
        <bbva-button-default @click = ${this.registrar}  text="Registrar"></bbva-button-default>
      </div>
    `;
  }
}

// Register the element with the browser
customElements.define(CapacitacionForm.is, CapacitacionForm);
