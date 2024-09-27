<script lang="ts">
	import { alphabet, type Alphabet } from '$lib/alphabet';

	const selectedGroups = alphabet.filter((group) => group.selected);

	let currentLetter = pickRandomLetter(selectedGroups);
	let currentAnswer = '';

	let correct = 0;
	let total = 0;

	function checkAnswer(correctAnswer: string, currentAnswer: string) {
		if (!currentAnswer) return undefined;

		if (currentAnswer === correctAnswer) return true;

		for (let i = 0; i < currentAnswer.length; i++) {
			if (correctAnswer[i] !== currentAnswer[i]) return false;
		}
	}

	function pickRandomLetter(group: Alphabet) {
		const subGroup = group[Math.floor(Math.random() * group.length)];
		const letter = subGroup.letters[Math.floor(Math.random() * subGroup.letters.length)];

		return letter;
	}

	$: {
		const answer = checkAnswer(currentLetter.romanization[0], currentAnswer);
		if (answer !== undefined) {
			if (answer === true) {
				correct++;
			}

			total++;
			currentAnswer = '';
			currentLetter = pickRandomLetter(selectedGroups);
		}
	}
</script>

<div class="container">
	<div class="letter">{currentLetter.letter}</div>
	<input type="text" class="answer" bind:value={currentAnswer} />
	{#if total > 0}
		<div class="score">
			{correct} / {total}
		</div>
	{/if}
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
