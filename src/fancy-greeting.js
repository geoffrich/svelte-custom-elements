import { html, css, LitElement } from 'lit';

export class FancyGreeting extends LitElement {
	static get styles() {
		return css`
			p {
				border: 5px dashed mediumaquamarine;
				padding: 4px;
			}

			:host([large]) {
				font-size: 32px;
			}
		`;
	}

	static get properties() {
		return {
			names: { type: Array },
			greeting: { type: String },
			large: {
				// you need to reflect any properties where the corresponding attribute is used for styling
				reflect: true,
				type: Boolean
			}
		};
	}

	constructor() {
		super();
		this.names = [];
		// if you don't provide a default, Svelte won't know it's a boolean
		this.large = false;
	}

	render() {
		return html`<p>
			${this.greeting}, ${this.names ? this.names.join(', ') : 'no one'}! Font
			size is ${this.large ? 'large' : 'not large'}.
		</p>`;
	}
}

customElements.define('fancy-greeting', FancyGreeting);
