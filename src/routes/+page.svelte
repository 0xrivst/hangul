<script lang="ts">
	import settingsShown from '$lib/stores/settingsShown';

	import AlphabetTable from '$components/AlphabetTable.svelte';
	import Collapsible from '$components/Collapsible.svelte';
	import Trainer from '$components/Trainer.svelte';
</script>

<div class="wrapper">
	<Trainer />
	<Collapsible bind:isOpen={$settingsShown} buttonText="show/hide options">
		<AlphabetTable />
	</Collapsible>
</div>

<style>
	.wrapper {
		max-width: 800px;
		width: 90%;
		margin: 0 auto;
	}
</style>
