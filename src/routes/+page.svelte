<script lang="ts">
	import appState from '$lib/AppState.svelte';

	import AlphabetTable from '$components/AlphabetTable.svelte';
	import Collapsible from '$components/Collapsible.svelte';
	import Trainer from '$components/Trainer.svelte';
</script>

<div class="wrapper">
	<Trainer />
	<Collapsible bind:isOpen={appState.settingsShown}>
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
