<script>
	import Container from '../../Container.svelte';
	import Pattern from '../../Pattern.svelte';
</script>

<svelte:head>
	<title>Code Reading Club | Code of Conduct</title>
</svelte:head>

<Pattern>
	<Container>
		<h1>Code of Conduct</h1>
		<p>
			We've found that code reading clubs work best when you involve people with different
			backgrounds and levels of experience. People read code differently and we can learn a lot from
			each other. It's important for us to make sure the environment where these discussions happen
			is inclusive and supportive. Everyone should feel comfortable to participate! The following
			guidelines are meant to codify these intentions.
		</p>
		<h2>How to be with each other</h2>
		<p>
			We expect ourselves and participants to ensure that our community is harassment-free for
			everyone.
		</p>
		<h3>
			Examples of behaviours that help us to provide an an open, welcoming, diverse, inclusive, and
			healthy community:
		</h3>
		<ul>
			<li>Demonstrating empathy and kindness toward other people</li>
			<li>Being respectful of differing opinions, viewpoints, and experiences</li>
			<li>Giving and gracefully accepting constructive feedback</li>
			<li>Accepting responsibility and apologising to those affected by our mistakes</li>
			<li>Learning from our and others' mistakes and not repeating negative behaviour</li>
			<li>Focusing on what is best for the overall community, not just ourselves as individuals</li>
			<li>When discussing code, avoid criticising the person who wrote the code</li>
			<li>Remembering we don't know the context or reasons for decisions made by others</li>
		</ul>
		<h3>Examples of unacceptable behavior include:</h3>
		<ul class="unacceptable">
			<li>
				Public or private harassment of any kind including offensive comments related to gender,
				sexual orientation, disability, physical appearance, body size, race, politics, or religion
			</li>
			<li>
				The use of sexualised language or imagery, and sexual attention or advances of any kind
			</li>
			<li>
				Sharing others' private information, such as a physical or email address, without their
				explicit permission
			</li>
			<li>
				Other conduct which could reasonably be considered inappropriate in a professional setting
			</li>
		</ul>
		<h2>Guidelines for running a club</h2>
		<p>
			The code of conduct above is the one we use in our clubs. Feel free to use it as is or modify
			it to fit your circumstances.
		</p>
		<p>
			The code of conduct above is the one we use in our clubs. Feel free to use it as is or modify
			it to fit your circumstances.
		</p>
		<h2>Talk to us</h2>
		<p>Emails us at hello@codereading.club</p>
		<p>
			If you experience any behaviours or atmosphere in our groups that feels contrary to these
			values, please let us know. We want everyone to feel safe, equal and welcome.
		</p>
		<p>
			If you have any questions, concerns or suggestions regarding this policy, please get in touch.
		</p>
	</Container>
</Pattern>

<style>
	h1 {
		font-size: 170%;
		margin-bottom: 1rem;
		margin-top: 2rem;
	}

	h2 {
		font-size: 120%;
		margin-bottom: 1rem;
		margin-top: 2rem;
	}

	h3 {
		margin-bottom: 1rem;
		margin-top: 2rem;
	}

	p + p {
		margin-top: 1rem;
	}

	ul {
		padding: 0.5rem;
		border-radius: 8px;
		list-style-position: inside;
	}

	li {
		margin-bottom: 0.5rem;
	}

	li::marker {
		color: var(--teal);
		content: '►';
	}

	.unacceptable li::marker {
		color: var(--orange);
	}
</style>
