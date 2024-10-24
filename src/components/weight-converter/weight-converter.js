import { WeightConverter } from "unit-converter-package"

const template = document.createElement('template')
template.innerHTML = `
<style>
</style>
<div class="weight-converter">
  <h1>Weight Converter</h1>
  <label for="input">Add a value to convert:</label>
  <input type="number" id="input" placeholder="Enter value">

  <label for="fromUnit">From:</label>
  <select id="fromUnit">
    <option value="kg" selected>Kg</option>
    <option value="lbs">Pounds</option>
  </select>

  <label for="toUnit">To:</label>
  <select id="toUnit">
    <option value="kg">Kg</option>
    <option value="lbs" selected>Pounds</option>
  </select>

  <button id="convert">Convert</button>

  <p id="output"></p>
</div>
`
customElements.define('weight-converter',
  class extends HTMLElement {

    #weightConverter

    #convertButton

    #input

    #output

    #fromUnit

    #toUnit

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#weightConverter = new WeightConverter()
      this.#convertButton = this.shadowRoot.querySelector('#convert')
      this.#input = this.shadowRoot.querySelector('#input')
      this.#output = this.shadowRoot.querySelector('#output')
      this.#fromUnit = this.shadowRoot.querySelector('#fromUnit')
      this.#toUnit = this.shadowRoot.querySelector('#toUnit')
    }

    connectedCallback() {
      this.#convertButton.addEventListener('click', this.#handleConvert.bind(this))
    }

    #handleConvert() {
      if (this.#input.value === '') {
        this.#handleEmptyInput()
      }
        else if (this.#fromUnit.value === this.#toUnit.value) {
        this.#handleSameUnitConversion()
      } else if (this.#fromUnit.value === 'kg' && this.#toUnit.value === 'lbs') {
          this.#handleKgToLbsConversion()
      } else {
          this.#handleLbsToKgConversion()
      }
    }
    
    #handleSameUnitConversion( ) {
      this.#output.textContent = `${this.#input.value} ${this.#fromUnit.value} is still ${this.#input.value} ${this.#fromUnit.value} Please select different units to convert.`
    }

    #handleKgToLbsConversion() {
      this.#output.textContent = `${this.#input.value} ${this.#fromUnit.value}  = ${this.#weightConverter.convertKgToLbs(parseFloat(this.#input.value))} ${this.#toUnit.value}`
    }

    #handleLbsToKgConversion() {
      this.#output.textContent = `${this.#input.value} ${this.#fromUnit.value} = ${this.#weightConverter.convertLbsToKg(parseFloat(this.#input.value))} ${this.#toUnit.value}`
    }

    #handleEmptyInput() {
      this.#output.textContent = 'Please enter a value to convert.'
    }

    clearOutput() {
      this.#output.textContent = ''
    }

  }
)