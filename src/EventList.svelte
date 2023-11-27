<script lang="ts">
	import Event from './Event.svelte';

	interface Event {
		name: { text: string };
		start: { local: string };
		url: string;
		online_event: boolean;
		status: string;
	}

	interface Error {
		error: string;
		error_description: string;
		url: string;
		is_online: boolean;
	}

	function isEvent(item: Event | Error): item is Event {
		return (item as Event).name !== undefined;
	}

	export let data: { events: Array<Event | Error> };
	export let nextThreeEvents: boolean;

	const validEvents = data.events.filter(isEvent).filter((item) => item.status !== 'completed');

	let events = nextThreeEvents ? validEvents.slice(0, 3) : validEvents;
</script>

{#if events.length}
	<ul>
		{#each events as event}
			{#if event.status !== 'completed'}
				<li>
					<Event
						name={event.name.text}
						date={event.start.local}
						link={event.url}
						online={event.online_event}
					/>
				</li>
			{/if}
		{/each}
	</ul>
{:else}
	<div>There are no future events at the moment, check back soon for more to be announced!</div>
{/if}

<style>
	li + li {
		margin-top: 2rem;
	}

	div {
		text-align: center;
	}

	@media (min-width: 700px) {
		ul {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			margin: -1rem;
		}

		ul > li {
			margin: 1rem;
			width: calc(100% / 3 - 2rem);
		}
	}
</style>
