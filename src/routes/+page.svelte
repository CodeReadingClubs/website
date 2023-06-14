<script>
	import Container from '../Container.svelte';
	import EventList from '../EventList.svelte';
	import Pattern from '../Pattern.svelte';

	export let data;
</script>

<svelte:head>
	<title>Code Reading Club</title>
</svelte:head>

<Pattern>
	<Container>
		<h1>
			Workshops, exercises and techniques to help you understand your
			<span class="underline">code&nbspbetter</span>
		</h1>

		<div class="narrow">
			<h2>What is Code Reading Club?</h2>

			<p>
				In essence a Code Reading Club is a bit like a book club, and a bit like an escape room.
			</p>
			<p>
				A small group meet regularly to read and discuss short pieces of code. Each session is
				facilitated by a member of the group who has selected the code sample for the occasion and
				who guides the group through a series of exploratory exercises. Over time, the group
				improves its technique through practice and by experimenting with new approaches.
			</p>
			<p>
				Experienced developers know that their work invariably involves reading more code than
				writing it, but little attention is paid to reading technique. By actively training these
				muscles we get immediate benefits, and it's fun. In professional and commercial settings
				Code Reading Club is a collaborative tool to help teams:
			</p>
			<ul>
				<li>Improve maintainability</li>
				<li>Demystify unfamiliar code</li>
				<li>Embrace change</li>
				<li>Engage in vertical learning</li>
				<li>Onboard new members</li>
			</ul>
		</div>

		<div class="events">
			<h2>Upcoming events</h2>
			<EventList {data} nextThreeEvents={true} />
			<a href="/all-events">
				All upcoming events
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
					aria-hidden="true"
					focusable="false"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
					/>
				</svg>
			</a>
		</div>
	</Container>
</Pattern>

<style>
	h1 {
		font-size: 170%;
		line-height: 1.2;
		margin: 4rem auto;
		max-width: 25ch;
		text-align: center;
	}

	@media (min-width: 700px) {
		h1 {
			font-size: 300%;
			margin: 8rem auto;
		}
	}

	h2 {
		font-size: 120%;
		text-decoration: 2px solid var(--orange);
		margin-bottom: 2rem;
	}

	@media (min-width: 700px) {
		h2 {
			font-size: 150%;
		}
	}

	.underline {
		text-decoration: underline;
		text-decoration-color: var(--orange);
		text-underline-offset: 0.5rem;
	}

	ul {
		border-radius: 8px;
		list-style-position: inside;
		margin-top: 1rem;
	}

	li {
		margin-bottom: 1rem;
	}

	li::marker {
		color: var(--teal);
		content: '►';
	}

	.narrow {
		margin: auto;
		max-width: 60ch;
	}

	p + p {
		margin-top: 1rem;
	}

	.events {
		background-color: var(--gray2);
		border-bottom-right-radius: 8px;
		border-left: 4px solid var(--orange);
		border-top-right-radius: 8px;
		display: flex;
		flex-direction: column;
		margin: 4rem 0;
		padding: 1rem;
	}

	@media (min-width: 700px) {
		.events {
			padding: 1rem 2rem;
		}
	}

	.events h2 {
		margin-bottom: 1rem;
	}

	.events > a {
		align-self: flex-end;
		color: var(--text);
		display: flex;
		margin-top: 1rem;
		text-decoration-color: var(--orange);
		text-decoration-thickness: 2px;
		text-underline-offset: 4px;
		align-items: center;
		padding: 4px;
		border-radius: 4px;
	}

	.events > a > svg {
		height: 20px;
		margin-left: 0.5rem;
		width: 20px;
	}

	@media (min-width: 700px) {
		.events h2 {
			margin-bottom: 2rem;
		}

		.events > a {
			margin-top: 2rem;
		}
	}
</style>
