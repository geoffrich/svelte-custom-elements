<script>
	import './custom-elements/custom-text';
	import DisplayHTML from './DisplayHTML.svelte';

	/** @param {Element} node */
	function setAttributes(node, attributes) {
		const applyAttributes = () => {
			// note that this does not check if the attribute changed
			Object.entries(attributes).forEach(([k, v]) => {
				if (v !== undefined) {
					node.setAttribute(k, v);
				} else {
					node.removeAttribute(k);
				}
			});
		};

		applyAttributes();

		return {
			update(updatedAttributes) {
				attributes = updatedAttributes;
				applyAttributes();
			}
		};
	}

	let flagged = true;
</script>

<h2>Attributes used as styling hooks</h2>
<label><input type="checkbox" bind:checked={flagged} /> Flagged</label>

<h3>Property set, attribute not reflected</h3>
<DisplayHTML>
	<custom-text flag={flagged}
		>Need to put some interesting text here.</custom-text
	>
</DisplayHTML>

<h3>Force setting attributes</h3>
<DisplayHTML>
	<custom-text use:setAttributes={{ flag: flagged ? '' : undefined }}
		>Need to put some interesting text here.</custom-text
	>
</DisplayHTML>
