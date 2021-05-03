<script>
	import DisplayHTML from './DisplayHTML.svelte';
	setTimeout(() => import('./custom-elements/fancy-greeting'), 500);

	export let greeting;
	export let names;

	let counter = 0;

	function setProperties(node, properties) {
		const applyProperties = () => {
			// note that this does not check if the property changed
			Object.entries(properties).forEach(([k, v]) => {
				node[k] = v;
			});
		};

		applyProperties();

		return {
			update(updatedProperties) {
				properties = updatedProperties;
				applyProperties();
			}
		};
	}
</script>

<h2>Lazy-loading custom elements</h2>
<p>
	On initial render, the custom element definition has not been loaded. This
	causes Svelte to set everything as attributes using setAttribute. Click the
	button to re-render the custom element. Since the custom element is now
	defined, Svelte sets everything as properties.
</p>

<button on:click={() => counter++}>Re-render custom element</button>
<p>Re-rendered {counter} times</p>

{#key counter}
	<h3>Default</h3>
	<DisplayHTML>
		<fancy-greeting {greeting} {names} />
	</DisplayHTML>
	<h3>With properties action</h3>
	<DisplayHTML>
		<fancy-greeting {greeting} use:setProperties={{ names }} />
	</DisplayHTML>
{/key}
