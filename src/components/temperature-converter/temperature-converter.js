const template = document.createElement('template')
template.innerHTML = `
<style></style>
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