const template = document.createElement('template')
template.innerHTML = `
<style></style>
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