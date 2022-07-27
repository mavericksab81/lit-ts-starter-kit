import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('hello-world')
export class HelloWorld extends LitElement {
    
    static override styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
  `;

    @property({ type: Number})
    count = 0;

    private _onClick() {
        this.count++;
        this.dispatchEvent(new CustomEvent('count-changed'));
    }

    override render() {
        return html`
            <div>Counter App</div>
            <button @click=${this._onClick} part="button">
                Click Count: ${this.count}
            </button>
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'hello-world': HelloWorld;
    }
  }