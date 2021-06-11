<script>
	import './custom-elements/secret-box';
	import DisplayHTML from './DisplayHTML.svelte';
	import ShowProperties from './ShowProperties.svelte';

	let noValueEl, valueEl;
	const properties = ['open'];
</script>

<h2>Boolean properties</h2>

<p>
	Recently fixed in 3.38.0, but still can be an issue if the custom element
	author does not set a default value for the boolean.
</p>

<h3>Default</h3>
<DisplayHTML>
	<secret-box />
</DisplayHTML>

<h3>open set, no value</h3>
<DisplayHTML>
	<secret-box open bind:this={noValueEl} />
</DisplayHTML>
<ShowProperties element={noValueEl} {properties} />

<h3>open={'{true}'}</h3>
<DisplayHTML>
	<secret-box open={true} bind:this={valueEl}>Last name</secret-box>
</DisplayHTML>
<ShowProperties element={valueEl} {properties} />
