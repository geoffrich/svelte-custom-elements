<script>
	import './custom-elements/custom-text';
	import DisplayHTML from './DisplayHTML.svelte';

	/** @param {Element} node */
	function setAttributes(node, attributes) {
		const applyAttributes = () => {
			// note that this does not check if the attribute changed
			Object.entries(attributes).forEach(([k, v]) => {
				node.setAttribute(k, v);
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
</script>

<h2>Attributes used as styling hooks</h2>

<h3>Property set, attribute not reflected</h3>
<DisplayHTML>
	<custom-text flag>Need to put some interesting text here.</custom-text>
</DisplayHTML>

<h3>Force setting attributes</h3>
<DisplayHTML>
	<custom-text use:setAttributes={{ flag: '' }}
		>Need to put some interesting text here.</custom-text
	>
</DisplayHTML>
