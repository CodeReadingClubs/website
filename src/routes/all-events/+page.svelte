<script>
	import Container from '../../Container.svelte';
	import EventList from '../../EventList.svelte';
	import Pattern from '../../Pattern.svelte';

	export let data;
</script>

<svelte:head>
	<title>Code Reading Club | All Events</title>
</svelte:head>

<Pattern>
	<Container>
		<h1>All Events</h1>

		<div class="container">
			<EventList {data} nextThreeEvents={false} />
		</div>
	</Container>
</Pattern>

<style>
	h1 {
		font-size: 170%;
		margin-bottom: 1rem;
		margin-top: 2rem;
	}

	.container {
		background-color: var(--gray2);
		border-radius: 8px;
		padding: 1rem;
	}
</style>
