import { LengthConverter } from "unit-converter-package"

const template = document.createElement('template')
template.innerHTML = `
<style></style>
<div class="length-converter">
  <h1>Length Converter</h1>
  <label for="input">Add a value to convert:</label>
  <input type="number" id="input" placeholder="Enter value">

  <label for="fromUnit">From:</label>
  <select id="fromUnit">
    <option value="mm" selected>Millimeters</option>
    <option value="cm">Centimeters</option>
    <option value="m">Meters</option>
    <option value="km">Kilometers</option>
    <option value="inch">Inches</option>
    <option value="foot">Feet</option>
    <option value="yard">Yards</option>
    <option value="mile">Miles</option>
  </select>

  <label for="toUnit">To:</label>
  <select id="toUnit">
    <option value="mm">Millimeters</option>
    <option value="cm" selected>Centimeters</option>
    <option value="m">Meters</option>
    <option value="km">Kilometers</option>
    <option value="inch">Inches</option>
    <option value="foot">Feet</option>
    <option value="yard">Yards</option>
    <option value="mile">Miles</option>
  </select>

  <button id="convert">Convert</button>
</div>
`
customElements.define('length-converter',
  class extends HTMLElement {

    #lengthConverter

    #convertButton

    #input

    #output

    #fromUnit

    #toUnit

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        this.#lengthConverter = new LengthConverter()
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

    }

    #handleSameUnitConversion( ) {
      this.#output.textContent = `${this.#input.value} ${this.#fromUnit.value} is still ${this.#input.value} ${this.#fromUnit.value} Please select different units to convert.`
    }

    #handleEmptyInput() {
      this.#output.textContent = 'Please enter a value to convert.'
    }

    clearOutput() {
      this.#output.textContent = ''
    }
  }
)