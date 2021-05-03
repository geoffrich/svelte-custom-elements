<script>
	let elementHTML = '';

	function getHTML(node) {
		elementHTML = node.innerHTML;
	}
</script>

<div use:getHTML>
	<slot />
</div>
<pre>{elementHTML}</pre>

<style>
	pre {
		white-space: pre-wrap;
	}
</style>
