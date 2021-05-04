<script>
	export let properties;
	export let element;
</script>

{#if element}
	<ul>
		{#each properties as prop}
			<li>{prop}: {JSON.stringify(element[prop])}</li>
		{/each}
	</ul>
{/if}

<style>
	li {
		font-family: monospace;
	}
</style>
