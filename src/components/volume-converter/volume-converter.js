import { VolumeConverter } from "unit-converter-package"

const template = document.createElement('template')
template.innerHTML = `
<style></style>
<div class="volume-converter">
  <h1>Volume Converter</h1>
  <label for="input">Add a value to convert:</label>
  <input type="number" id="input" placeholder="Enter value">

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

  <p id="output"></p>
</div>
`
customElements.define('volume-converter',
  class extends HTMLElement {

    #volumeConverter

    #convertButton

    #input

    #output

    #fromUnit

    #toUnit

    #abortController

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#volumeConverter = new VolumeConverter()
      this.#convertButton = this.shadowRoot.querySelector('#convert')
      this.#input = this.shadowRoot.querySelector('#input')
      this.#output = this.shadowRoot.querySelector('#output')
      this.#fromUnit = this.shadowRoot.querySelector('#fromUnit')
      this.#toUnit = this.shadowRoot.querySelector('#toUnit')
      this.#abortController = new AbortController()
    }

    connectedCallback() {
      this.#convertButton.addEventListener('click',
        () => this.#handleInput(),
        { signal: this.#abortController.signal }
      )
    }

    disconnectedCallback() {
      // Removes the eventlistener
      this.#abortController.abort()
    }

    clearOutput() {
      this.#output.textContent = ''
    }
    
    #handleInput() {
      try {
        if (this.#input.value === '') {
          this.#handleEmptyInput()
        } else if (this.#fromUnit.value === this.#toUnit.value) {
          this.#handleSameUnitConversion()
        } else if (this.#fromUnit.value === 'gallon' && this.#toUnit.value === 'litre') {
          this.#handleGallonToLitreConversion()
        } else if (this.#fromUnit.value === 'litre' && this.#toUnit.value === 'gallon') {
          this.#handleLitreToGallonConversion()
        }
      } catch (error) {
          this.#output.textContent = error.message
        }
    }

    #handleEmptyInput() {
      throw new Error('Please enter a value to convert.')
    }

    #handleSameUnitConversion( ) {
      throw new Error(`${this.#input.value} ${this.#fromUnit.value} is still ${this.#input.value} ${this.#fromUnit.value} Please select different units to convert.`)
    }

    #handleGallonToLitreConversion() {
      this.#output.textContent = `${this.#input.value} ${this.#fromUnit.value}  = ${this.#volumeConverter.convertGallonToLitre(parseFloat(this.#input.value))} ${this.#toUnit.value}`
    }

    #handleLitreToGallonConversion() {
      this.#output.textContent = `${this.#input.value} ${this.#fromUnit.value}  = ${this.#volumeConverter.convertLitreToGallon(parseFloat(this.#input.value))} ${this.#toUnit.value}`
    }
  }
)