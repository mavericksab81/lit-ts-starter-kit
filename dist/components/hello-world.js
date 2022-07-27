var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let HelloWorld = class HelloWorld extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    _onClick() {
        this.count++;
        this.dispatchEvent(new CustomEvent('count-changed'));
    }
    render() {
        return html `
            <div>Counter App</div>
            <button @click=${this._onClick} part="button">
                Click Count: ${this.count}
            </button>
            <slot></slot>
        `;
    }
};
HelloWorld.styles = css `
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
  `;
__decorate([
    property({ type: Number })
], HelloWorld.prototype, "count", void 0);
HelloWorld = __decorate([
    customElement('hello-world')
], HelloWorld);
export { HelloWorld };
//# sourceMappingURL=hello-world.js.map