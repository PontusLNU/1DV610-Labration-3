const template = document.createElement('template')
template.innerHTML = `
<style></style>
`
customElements.define('weight-converter',
  class extends HTMLElement {

    #weightConverter

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#weightConverter = this.shadowRoot.querySelector('.weight-converter')
    }
  }
)