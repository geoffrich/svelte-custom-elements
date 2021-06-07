import { html, LitElement } from 'lit';

export class CustomInput extends LitElement {
	static get properties() {
		return {
			disabled: {
				type: Boolean
			}
		};
	}

	constructor() {
		super();
		// if you don't provide a default, Svelte won't know it's a boolean
		// this.disabled = false;
	}

	render() {
		return html`
			<label
				><slot></slot> <input ?disabled=${this.disabled} type="text"
			/></label>
		`;
	}
}

customElements.define('custom-input', CustomInput);
