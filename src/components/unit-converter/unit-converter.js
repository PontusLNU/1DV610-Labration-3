import '../length-converter/length-converter'
import '../temperature-converter/temperature-converter'
import '../time-converter/time-converter'
import '../volume-converter/volume-converter'
import '../weight-converter/weight-converter'

const template = document.createElement('template')
template.innerHTML = `
<style>
  .hidden {
    display: none
  }
</style>
<button class="length-button">Length Converter</button>

<button class="temperature-button">Temperature Converter</button>

<button class="time-button">Time Converter</button>

<button class="volume-button">Volume Converter</button>

<button class="weight-button">Weight Converter</button>

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

    }

    connectedCallback() {
      this.#lengthConverter.classList.add('hidden')
      this.#temperatureConverter.classList.add('hidden')
      this.#timeConverter.classList.add('hidden')
      this.#volumeConverter.classList.add('hidden')
      this.#weightConverter.classList.add('hidden')

      this.#lengthButton.addEventListener('click', () => this.showLengthConverter())
      this.#temperatureButton.addEventListener('click', () => this.showTemperatureConverter())
      this.#timeButton.addEventListener('click', () => this.showTimeConverter())
      this.#volumeButton.addEventListener('click', () => this.showVolumeConverter())
      this.#weightButton.addEventListener('click', () => this.showWeightConverter())
      
    }

    showLengthConverter() {
      this.#lengthConverter.classList.remove('hidden')
    }

    showTemperatureConverter() {
      this.#temperatureConverter.classList.remove('hidden')
    }

    showTimeConverter() {
      this.#timeConverter.classList.remove('hidden')
    }

    showVolumeConverter() {
      this.#volumeConverter.classList.remove('hidden')
    }

    showWeightConverter() {
      this.#weightConverter.classList.remove('hidden')
    }
  }
)