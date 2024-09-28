<script lang="ts">
	export let isOpen = false;
	export let buttonText = 'show/hide content';
</script>

<div>
	<button on:click={() => (isOpen = !isOpen)}>
		{buttonText}
	</button>

	<div hidden={!isOpen}>
		<slot></slot>
	</div>
</div>

<style>
	button {
		padding: 0.35em;
		margin: 2em auto;
		display: block;
		cursor: pointer;
	}
</style>
