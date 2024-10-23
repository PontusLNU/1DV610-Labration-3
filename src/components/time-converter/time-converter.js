const template = document.createElement('template')
template.innerHTML = `
<style></style>
<div class="time-converter">
  <h1>Time Converter</h1>
  <label for="inputValue">Add a value to convert:</label>
  <input type="number" id="inputValue" placeholder="Enter value">

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
</div>
`
customElements.define('time-converter',
  class extends HTMLElement {

    #timeConverter

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#timeConverter = this.shadowRoot.querySelector('.time-converter')
    }
  }
)