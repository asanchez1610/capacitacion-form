import { css, } from 'lit-element';


export default css`:host {
  display: block;
  box-sizing: border-box;
  @apply --capacitacion-form; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit; }

bbva-form-text, bbva-button-default {
  margin: 5px; }

.container-buttons {
  width: 100%;
  text-align: center; }
`;