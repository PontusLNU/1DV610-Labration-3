const template = document.createElement('template')
template.innerHTML = `
<style></style>
`
customElements.define('volume-converter',
  class extends HTMLElement {

    #volumeConverter

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#volumeConverter = this.shadowRoot.querySelector('.volume-converter')
    }
  }
)