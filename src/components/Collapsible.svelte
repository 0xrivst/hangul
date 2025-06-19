<script lang="ts">
	let { isOpen = $bindable() }: { isOpen: boolean } = $props();
</script>

<div>
	<button class="button invisible" onclick={() => (isOpen = !isOpen)}> show/hide content </button>

	<div hidden={!isOpen}>
		<slot></slot>
	</div>
</div>

<style>
	button {
		margin: 1rem auto;
		display: block;
	}
</style>
