<script lang="ts">
	import { alphabet, type Alphabet } from '$lib/alphabet';
	import appState from '$lib/AppState.svelte';

	import PlaySoundButton from './PlaySoundButton.svelte';

	let correct = $state(0);
	let total = $state(0);

	let selectedGroups = $state(filterGroups(alphabet, appState.enabledGroups));
	let currentLetter = $state(pickRandomLetter(selectedGroups));
	let currentAnswer = $state('');

	function checkAnswer(correctAnswer: string[], currentAnswer: string) {
		if (!currentAnswer) return undefined;

		if (correctAnswer.includes(currentAnswer)) return true;

		for (let i = 0; i < currentAnswer.length; i++) {
			for (let j = 0; j < correctAnswer.length; j++) {
				if (correctAnswer[j][i] !== currentAnswer[i]) return false;
			}
		}
	}

	function pickRandomLetter(group: Alphabet) {
		const subGroup = group[Math.floor(Math.random() * group.length)];
		const letter = subGroup.letters[Math.floor(Math.random() * subGroup.letters.length)];

		return letter;
	}

	function filterGroups(alphabet: Alphabet, groupsToEnable: boolean[]) {
		return alphabet.filter((_, index) => groupsToEnable[index]);
	}

	$effect(() => {
		const answer = checkAnswer(currentLetter.romanization, currentAnswer);
		if (answer !== undefined) {
			if (answer === true) {
				correct++;
			}

			total++;
			currentAnswer = '';
			currentLetter = pickRandomLetter(selectedGroups);
		}
	});
</script>

<div class="container">
	<div class="letter-container">
		<div class="romanization">{currentLetter.romanization}</div>
		<div class="letter">{currentLetter.letter}</div>
	</div>
	<div class="tip"></div>
	<input
		type="text"
		autocapitalize="off"
		autocorrect="off"
		spellcheck="false"
		class="answer"
		bind:value={currentAnswer}
	/>
	{#if total > 0}
		<div class="score">
			{correct} / {total}
		</div>
	{/if}
	<PlaySoundButton letter={currentLetter.letter} />
</div>

<style>
	.container {
		max-width: 800px;
		width: 90%;
		margin: 2em auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}
	.letter-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}
	.letter-container:hover .romanization {
		visibility: visible;
	}
	.romanization {
		visibility: hidden;
	}
	.letter {
		font-size: 5em;
	}
	.answer {
		width: 40%;
		padding: 6px;
		text-align: center;
		font-size: 1em;
	}
</style>
