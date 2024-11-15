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
    <option value="Mm" selected>Millimeters</option>
    <option value="Cm">Centimeters</option>
    <option value="M">Meters</option>
    <option value="Km">Kilometers</option>
    <option value="Inch">Inches</option>
    <option value="Foot">Feet</option>
    <option value="Yard">Yards</option>
    <option value="Mile">Miles</option>
  </select>

  <label for="toUnit">To:</label>
  <select id="toUnit">
    <option value="Mm">Millimeters</option>
    <option value="Cm" selected>Centimeters</option>
    <option value="M">Meters</option>
    <option value="Km">Kilometers</option>
    <option value="Inch">Inches</option>
    <option value="Foot">Feet</option>
    <option value="Yard">Yards</option>
    <option value="Mile">Miles</option>
  </select>

  <button id="convert">Convert</button>

  <p id="output"></p>

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

    clearOutput() {
      this.#output.textContent = ''
    }

    #handleConvert() {
      if (this.#input.value === '') {
        this.#handleEmptyInput()
      } else if (this.#fromUnit.value === this.#toUnit.value) {
        this.#handleSameUnitConversion()
      } else this.#handleConversion()
    }

    #handleEmptyInput() {
      this.#output.textContent = 'Please enter a value to convert.'
    }

    #handleSameUnitConversion( ) {
      this.#output.textContent = `${this.#input.value} ${this.#fromUnit.value} is still ${this.#input.value} ${this.#fromUnit.value} Please select different units to convert.`
    }

    #handleConversion() {
      const fromUnit = this.#fromUnit.value
      const toUnit = this.#toUnit.value
      const valueToConvert = parseFloat(this.#input.value)

      const methodName = `convert${fromUnit}To${toUnit}`

      const result = this.#lengthConverter[methodName](valueToConvert)

      this.#displayResult(result)
    }

    #displayResult(result){
      this.#output.textContent = `${this.#input.value} ${this.#fromUnit.value} = ${result} ${this.#toUnit.value}`
    }
  }
)