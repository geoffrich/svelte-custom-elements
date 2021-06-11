import { html, LitElement } from 'lit';

export class SecretBox extends LitElement {
	static get properties() {
		return {
			open: {
				type: Boolean
			}
		};
	}

	constructor() {
		super();
		// if you don't provide a default, Svelte won't know it's a boolean
		// this.open = false;
	}

	render() {
		return html`<div>The box is ${this.open ? 'open 🔓' : 'closed 🔒'}</div>`;
	}
}

customElements.define('secret-box', SecretBox);
