const template = document.createElement('template')
template.innerHTML = `
<style></style>
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