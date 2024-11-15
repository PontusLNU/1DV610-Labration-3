import { TimeConverter } from "unit-converter-package"

const template = document.createElement('template')
template.innerHTML = `
<style></style>
<div class="time-converter">
  <h1>Time Converter</h1>
  <label for="input">Enter the time to convert:</label>
  <input id="input" placeholder="Enter value">

  <label for="fromUnit">From:</label>
  <select id="fromUnit">
    <option value="12h" selected>12h</option>
    <option value="24h">24h</option>
  </select>

  <label for="toUnit">To:</label>
  <select id="toUnit">
    <option value="12h">12h</option>
    <option value="24h" selected>24h</option>
  </select>

  <button id="convert">Convert</button>

  <p id="output"></p>
</div>
`
customElements.define('time-converter',
  class extends HTMLElement {

    #timeConverter

    #convertButton

    #input

    #output

    #fromUnit

    #toUnit

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#timeConverter = new TimeConverter()
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
      try {
        if (this.#input.value === '') {
          this.#handleEmptyInput()
        } else if (this.#fromUnit.value === this.#toUnit.value) {
          this.#handleSameUnitConversion()
        } else if (this.#fromUnit.value === '12h' && this.#toUnit.value === '24h') {
          this.#handle12hTo24hConversion()
        } else if (this.#fromUnit.value === '24h' && this.#toUnit.value === '12h') {
          this.#handle24hTo12hConversion()
        }
    } catch (error) {
      this.#handleError()
    }
  }

    #handleEmptyInput() {
      this.#output.textContent = 'I can not make a time conversion from thin air!'
    }

    #handleSameUnitConversion( ) {
      this.#output.textContent = `Please select different time formats to convert.`
    }

    #handle12hTo24hConversion() {
      this.#output.textContent = `${this.#input.value} = ${this.#timeConverter.convert12HourTo24Hour(this.#input.value).toString()}`
    }

    #handle24hTo12hConversion() {
      this.#output.textContent = `${this.#input.value} = ${this.#timeConverter.convert24HourTo12Hour(this.#input.value).toString()}`
    }

    #handleError() {
      this.#output.textContent = 'Please enter the time in a valid format, xx:xx(pm/am if converting from 12hours).'
    }
  }
)