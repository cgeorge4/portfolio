class PortHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="Blender.html">Blender</a>
        <a href="GameBlock.html">Unity</a>
        <a href="Tap.html">TAP</a>
        <a href="Certs.html">Certifications</a>
      </div>
    `;
  }
}
customElements.define('port-header', PortHeader);

class PortFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="nav-links">
        ©2024 Carina George
      </div>
    `;
  }
}
customElements.define('port-footer', PortFooter);