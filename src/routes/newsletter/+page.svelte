<script>
	import Container from '../../Container.svelte';
	import Newsletter from '../../Newsletter.svelte';
	import Pattern from '../../Pattern.svelte';
</script>

<svelte:head>
	<title>Code Reading Club | Newsletter Signup</title>
</svelte:head>

<Pattern>
	<Container>
		<div class="narrow">
			<h1>Newsletter Signup</h1>

			<Newsletter />
		</div>
	</Container>
</Pattern>

<style>
	h1 {
		font-size: 170%;
		margin-bottom: 1rem;
		margin-top: 2rem;
	}

	.narrow {
		margin: auto;
		max-width: 60ch;
	}
</style>
