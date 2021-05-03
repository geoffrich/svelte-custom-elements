<script>
	let elementHTML = '';

	/** @param {Element} node */
	function getHTML(node) {
		const updateHTML = () => {
			elementHTML = node.innerHTML;
		};

		updateHTML();

		const observer = new MutationObserver((mutations, observer) => {
			updateHTML();
		});

		/** @type {MutationObserverInit} */
		const config = { attributes: true, childList: true, subtree: true };

		observer.observe(node, config);

		return {
			destroy() {
				observer.disconnect();
			}
		};
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
