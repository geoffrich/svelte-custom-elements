<script>
	import './custom-elements/custom-input';
	import DisplayHTML from './DisplayHTML.svelte';
	import ShowProperties from './ShowProperties.svelte';

	let noValueEl, valueEl;
	const properties = ['disabled'];
</script>

<h2>Boolean properties</h2>

<p>
	Recently fixed in 3.38.0, but still can be an issue if the custom element
	author does not set a default value for the boolean.
</p>

<h3>Default</h3>
<DisplayHTML>
	<custom-input>First name</custom-input>
</DisplayHTML>

<h3>disabled set, no value</h3>
<DisplayHTML>
	<custom-input disabled bind:this={noValueEl}>Middle name</custom-input>
</DisplayHTML>
<ShowProperties element={noValueEl} {properties} />

<h3>disabled={'{true}'}</h3>
<DisplayHTML>
	<custom-input disabled={true} bind:this={valueEl}>Last name</custom-input>
</DisplayHTML>
<ShowProperties element={valueEl} {properties} />
