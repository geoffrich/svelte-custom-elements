<script>
	import Lazyload from './Lazyload.svelte';
	import ReflectProperty from './ReflectProperty.svelte';

	let names = ['Amy', 'Rory', 'Clara', 'Bill'];
	let selectedNames = ['Amy', 'Clara'];
	let greeting = 'Hello';
</script>

<main>
	<h1>Svelte and custom elements</h1>

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

	<Lazyload {greeting} names={selectedNames} />
	<ReflectProperty />
</main>

<style>
	main {
		max-width: 80ch;
		margin: 2rem auto;
	}
</style>
