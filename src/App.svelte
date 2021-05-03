<script>
	import DisplayHTML from './DisplayHTML.svelte';

	setTimeout(() => import('./fancy-greeting'), 500);

	let names = ['Amy', 'Rory', 'Clara', 'Bill'];
	let selectedNames = ['Clara'];
	let greeting = 'Hello';
	let counter = 0;

	function setProperties(node, properties) {
		const applyProperties = () => {
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

<main>
	<h1>Svelte and custom elements: properties vs attributes</h1>

	<p>
		On initial render, the custom element definition has not been loaded. This
		causes Svelte to set everything as attributes using setAttribute. Click the
		button to re-render the custom element. Since the custom element is now
		defined, Svelte sets everything as properties.
	</p>

	<button on:click={() => counter++}>Re-render custom element</button>
	<p>Re-rendered {counter} times</p>

	{#key counter}
		<h2>Default</h2>
		<DisplayHTML>
			<fancy-greeting {greeting} names={selectedNames} />
		</DisplayHTML>
		<h2>With properties action</h2>
		<DisplayHTML>
			<fancy-greeting {greeting} use:setProperties={{ names: selectedNames }} />
		</DisplayHTML>
	{/key}

	<label>Greeting <input type="text" bind:value={greeting} /></label>
	<fieldset>
		<legend>Choose names</legend>
		{#each names as name}
			<label
				><input type="checkbox" bind:group={selectedNames} value={name} />
				{name}</label
			>
		{/each}
	</fieldset>
</main>
