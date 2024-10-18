const template = document.createElement('template')
template.innerHTML = `
<style></style>
`
customElements.define('unit-converter',
  class extends HTMLElement {

    #unitConverter

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        this.#unitConverter = this.shadowRoot.querySelector('.unit-converter')
    }
  }
)