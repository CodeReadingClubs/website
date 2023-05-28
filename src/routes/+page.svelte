<script>
	import Container from '../Container.svelte';
	import Pattern from '../Pattern.svelte';
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
	</Container>
</Pattern>

<style>
	h1 {
		font-size: 170%;
		line-height: 1.2;
		margin: 4rem auto;
		max-width: 25ch;
		text-align: center;

		@media (min-width: 700px) {
			font-size: 300%;
			margin: 8rem auto;
		}
	}

	h2 {
		font-size: 120%;
		text-decoration: 2px solid var(--orange);
		margin-bottom: 2rem;

		@media (min-width: 700px) {
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
</style>
