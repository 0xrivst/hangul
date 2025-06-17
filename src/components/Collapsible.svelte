<script lang="ts">
	let { isOpen = $bindable() }: { isOpen: boolean } = $props();
</script>

<div>
	<button on:click={() => (isOpen = !isOpen)}> show/hide content </button>

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
