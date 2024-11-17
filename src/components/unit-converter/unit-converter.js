import '../length-converter/length-converter'
import '../temperature-converter/temperature-converter'
import '../time-converter/time-converter'
import '../volume-converter/volume-converter'
import '../weight-converter/weight-converter'

const template = document.createElement('template')
template.innerHTML = `
<style>
  .hidden {
    display: none;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  button {
    background-color: #1b3b85;
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: 2px solid #ffffff;
    border-radius: 8px;
    cursor: pointer;
    margin: 10px 5px;
    transition: background-color 0.3s, transform 0.3s;
    font-family: 'Arial', sans-serif;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }

  button:hover {
    background-color: #244db7;
    transform: scale(1.10);
  }

  length-converter, temperature-converter, time-converter, volume-converter, weight-converter {
    display: block;
    background-color: #e0ecff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    width: 50%;
    text-align: center;
  }

  .page-header {
    text-align: center;
  }
</style>
<div>
  <h1 class="page-header">Unit Converter</h1>
</div>
<div class="button-container">
  <button class="length-button">Length Converter</button>
  <button class="temperature-button">Temperature Converter</button>
  <button class="time-button">Time Converter</button>
  <button class="volume-button">Volume Converter</button>
  <button class="weight-button">Weight Converter</button>
</div>

<length-converter></length-converter>
<temperature-converter></temperature-converter>
<time-converter></time-converter>
<volume-converter></volume-converter>
<weight-converter></weight-converter>
`
customElements.define('unit-converter',
  class extends HTMLElement {

    #unitConverter

    #lengthConverter

    #temperatureConverter

    #timeConverter

    #volumeConverter

    #weightConverter

    #lengthButton

    #temperatureButton

    #timeButton

    #volumeButton

    #weightButton

    #abortController

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#unitConverter = this.shadowRoot.querySelector('.unit-converter')
      this.#lengthConverter = this.shadowRoot.querySelector('length-converter')
      this.#temperatureConverter = this.shadowRoot.querySelector('temperature-converter')
      this.#timeConverter = this.shadowRoot.querySelector('time-converter')
      this.#volumeConverter = this.shadowRoot.querySelector('volume-converter')
      this.#weightConverter = this.shadowRoot.querySelector('weight-converter')

      this.#lengthButton = this.shadowRoot.querySelector('.length-button')
      this.#temperatureButton = this.shadowRoot.querySelector('.temperature-button')
      this.#timeButton = this.shadowRoot.querySelector('.time-button')
      this.#volumeButton = this.shadowRoot.querySelector('.volume-button')
      this.#weightButton = this.shadowRoot.querySelector('.weight-button')

      this.#abortController = new AbortController()

    }

    connectedCallback() {
      this.#lengthConverter.classList.add('hidden')
      this.#temperatureConverter.classList.add('hidden')
      this.#timeConverter.classList.add('hidden')
      this.#volumeConverter.classList.add('hidden')
      this.#weightConverter.classList.add('hidden')

      this.#lengthButton.addEventListener('click',
        () => this.#showLengthConverter(),
        { signal: this.#abortController.signal }
      )

      this.#temperatureButton.addEventListener('click',
        () => this.#showTemperatureConverter(),
        { signal: this.#abortController.signal }
      )

      this.#timeButton.addEventListener('click',
        () => this.#showTimeConverter(),
        { signal: this.#abortController.signal }
      )

      this.#volumeButton.addEventListener('click',
        () => this.#showVolumeConverter(),
        { signal: this.#abortController.signal }
      )

      this.#weightButton.addEventListener('click',
        () => this.#showWeightConverter(),
        { signal: this.#abortController.signal }
      )

    }

    disconnectedCallback() {
      // Removes all the eventlisteners
      this.#abortController.abort()
    }

    #showLengthConverter() {
      this.#hideConverters()
      this.#lengthConverter.classList.remove('hidden')
    }

    #showTemperatureConverter() {
      this.#hideConverters()
      this.#temperatureConverter.classList.remove('hidden')
    }

    #showTimeConverter() {
      this.#hideConverters()
      this.#timeConverter.classList.remove('hidden')
    }

    #showVolumeConverter() {
      this.#hideConverters()
      this.#volumeConverter.classList.remove('hidden')
    }

    #showWeightConverter() {
      this.#hideConverters()
      this.#weightConverter.classList.remove('hidden')
    }

    #hideConverters() {
      this.#lengthConverter.classList.add('hidden')
      this.#temperatureConverter.classList.add('hidden')
      this.#timeConverter.classList.add('hidden')
      this.#volumeConverter.classList.add('hidden')
      this.#weightConverter.classList.add('hidden')
      this.#clearOutputs()
    }

    #clearOutputs() {
      this.#lengthConverter.clearOutput()
      this.#temperatureConverter.clearOutput()
      this.#timeConverter.clearOutput()
      this.#volumeConverter.clearOutput()
      this.#weightConverter.clearOutput()
    }
  }
)