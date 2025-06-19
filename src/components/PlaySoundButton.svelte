<script lang="ts">
	let { letter }: { letter: string } = $props();

	console.log(letter);

	function play() {
		new Audio(`/audio/${letter}.mp3`).play();
	}
</script>

<button class="button default" onclick={play}>Play sound</button>
