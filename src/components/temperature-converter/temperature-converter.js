import { TemperatureConverter } from "unit-converter-package"

const template = document.createElement('template')
template.innerHTML = `
<style></style>
<div class="temperature-converter">
  <h1>Temperature Converter</h1>
  <label for="input">Add a value to convert:</label>
  <input type="number" id="input" placeholder="Enter value">

  <label for="fromUnit">From:</label>
  <select id="fromUnit">
    <option value="celsius" selected>Celsius</option>
    <option value="fahrenheit">Fahrenheit</option>
  </select>

  <label for="toUnit">To:</label>
  <select id="toUnit">
    <option value="celsius">Celsius</option>
    <option value="fahrenheit" selected>Fahrenheit</option>
  </select>

  <button id="convert">Convert</button>

  <p id="output"></p>
</div>
`
customElements.define('temperature-converter',
  class extends HTMLElement {

    #temperatureConverter

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

      this.#temperatureConverter =  new TemperatureConverter()
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
        } else if (this.#fromUnit.value === 'celsius' && this.#toUnit.value === 'fahrenheit') {
          this.#handleCelsiusToFahrenheitConversion()
        } else if (this.#fromUnit.value === 'fahrenheit' && this.#toUnit.value === 'celsius') {
          this.#handleFahrenheitToCelsiusConversion()
        }
      } catch (error) {
          this.#output.textContent = error.message
      }
    }

    #handleEmptyInput() {
      throw new Error('Please enter a value to convert')
    }

    #handleSameUnitConversion( ) {
      throw new Error(this.#output.textContent = `${this.#input.value} degrees ${this.#fromUnit.value} is still ${this.#input.value} degrees ${this.#fromUnit.value} Please select different units to convert.`)
    }

    #handleCelsiusToFahrenheitConversion() {
      this.#output.textContent = `${this.#input.value} degrees ${this.#fromUnit.value}  = ${this.#temperatureConverter.convertCelsiusToFahrenheit(parseFloat(this.#input.value))} degrees ${this.#toUnit.value}`
    }

    #handleFahrenheitToCelsiusConversion() {
      this.#output.textContent = `${this.#input.value} degrees ${this.#fromUnit.value}  = ${this.#temperatureConverter.convertFahrenheitToCelsius(parseFloat(this.#input.value))} degrees ${this.#toUnit.value}`
    }
  }
)