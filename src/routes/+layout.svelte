<script>
	import Footer from '../Footer.svelte';
	import NavBar from '../NavBar.svelte';
	import '../app.css';
</script>

<div class="layout">
	<NavBar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	main {
		flex-grow: 1;
	}

	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}
</style>
