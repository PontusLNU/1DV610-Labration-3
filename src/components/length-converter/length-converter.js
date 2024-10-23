const template = document.createElement('template')
template.innerHTML = `
<style></style>
<div class="length-converter">
  <h1>Length Converter</h1>
  <label for="inputValue">Add a value to convert:</label>
  <input type="number" id="inputValue" placeholder="Enter value">

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

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        this.#lengthConverter = this.shadowRoot.querySelector('.length-converter')
    }
  }
)