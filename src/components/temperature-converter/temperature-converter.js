const template = document.createElement('template')
template.innerHTML = `
<style></style>
<div class="temperature-converter">
  <h1>Temperature Converter</h1>
  <label for="inputValue">Add a value to convert:</label>
  <input type="number" id="inputValue" placeholder="Enter value">

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
</div>
`
customElements.define('temperature-converter',
  class extends HTMLElement {

    #temperatureConverter

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#temperatureConverter = this.shadowRoot.querySelector('.temperature-converter')
    }
  }
)