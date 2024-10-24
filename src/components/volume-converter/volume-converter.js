import { VolumeConverter } from "unit-converter-package"

const template = document.createElement('template')
template.innerHTML = `
<style></style>
<div class="volume-converter">
  <h1>Volume Converter</h1>
  <label for="inputValue">Add a value to convert:</label>
  <input type="number" id="inputValue" placeholder="Enter value">

  <label for="fromUnit">From:</label>
  <select id="fromUnit">
    <option value="gallon" selected>Gallon</option>
    <option value="litre">Litre</option>
  </select>

  <label for="toUnit">To:</label>
  <select id="toUnit">
    <option value="gallon">Gallon</option>
    <option value="litre" selected>Litre</option>
  </select>

  <button id="convert">Convert</button>
</div>
`
customElements.define('volume-converter',
  class extends HTMLElement {

    #volumeConverter

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#volumeConverter = this.shadowRoot.querySelector('.volume-converter')
    }
  }
)