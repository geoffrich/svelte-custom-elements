<script>
  setTimeout(loadCustomElementDefinition, 500);

  let names = ['Amy', 'Rory', 'Clara', 'Bill'];
  let selectedNames = ['Clara'];
  let counter = 0;

  let element;
  let elementHtml = '';

  function getOuterHtml(node) {
    elementHtml = node.outerHTML;
  }

  function loadCustomElementDefinition() {
    import('./fancy-greeting');
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
    <fancy-greeting
      greeting={'Hello'}
      bind:this={element}
      names={selectedNames}
      use:getOuterHtml
    />
  {/key}

  <pre>{elementHtml}</pre>

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

<style>
  pre {
    white-space: pre-wrap;
  }
</style>
