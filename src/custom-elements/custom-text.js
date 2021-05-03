import { html, css, LitElement } from 'lit';

export class CustomText extends LitElement {
	static get styles() {
		return css`
			:host([flag]) p::before {
				content: '🚩';
			}
		`;
	}

	static get properties() {
		return {
			flag: {
				// you need to reflect any properties where the corresponding attribute is used for styling
				// reflect: true,
				type: Boolean
			}
		};
	}

	constructor() {
		super();
		// if you don't provide a default, Svelte won't know it's a boolean
		this.flag = false;
	}

	render() {
		return html`<p>
			${this.flag ? html`<strong>Flagged:</strong>` : ''}
			<slot></slot>
		</p>`;
	}
}

customElements.define('custom-text', CustomText);
