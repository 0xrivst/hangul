<script lang="ts">
	import { alphabet } from '$lib/alphabet';
	import appState from '$lib/AppState.svelte';
</script>

<table>
	<tbody>
		{#each alphabet as category, index}
			<tr>
				<td>
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
