<script lang="ts">
	import { alphabet } from '$lib/alphabet';
	import appState from '$lib/AppState.svelte';
</script>

<table>
	<tbody>
		{#each alphabet as category, index}
			<tr>
				<td>
					<!-- TODO: Not sure why there's an error here, investigate later -->
					<!-- Also it looks a bit clumsy but if it works for now let it be so -->
					<input
						type="checkbox"
						bind:checked={
							() => appState.enabledGroups[index],
							(v) => {
								const a = appState.enabledGroups;
								a[index] = v;
								appState.enabledGroups = a;
							}
						}
					/>
				</td>
				{#each category.letters as letter}
					<td><span>{letter.letter}</span><br /><span>{letter.romanization}</span></td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		border: 1px solid #ddd;
		table-layout: fixed;
		width: 90%;
		max-width: 800px;
		margin: auto;
	}

	td {
		border: 1px solid #ddd;
		padding: 6px;
		text-align: center;
	}
</style>
