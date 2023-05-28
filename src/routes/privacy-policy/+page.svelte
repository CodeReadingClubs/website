<script>
	import Container from '../../Container.svelte';
	import Pattern from '../../Pattern.svelte';
</script>

<svelte:head>
	<title>Code Reading Club | Privacy Policy</title>
</svelte:head>

<Pattern>
	<Container>
		<h1>Privacy Policy</h1>
		<h2>Who we are</h2>
		<h2>Your personal information</h2>
		<p>
			Your personal information belongs to you. Any personal information we get from you will only
			be used internally and never shared with third parties.
		</p>
		<h3>Contact Information</h3>
		<p>
			If we ask for your email address we will only use it to contact you regarding sessions you
			signed up for, or to notify of future opportunities to engage with Code Reading Club.
		</p>
		<h2>Public code reading sessions</h2>
		<h3>Sharing tools</h3>
		<p>
			In our remote public code reading sessions we use collaborative tools to allow us to talk to
			each other and to collect discussion points from attendees.
		</p>
		<p>
			To keep it simple, we may use publicly accessible links to share these tools. After each
			session we will aim to make these private or remove them from the internet as soon as we no
			longer need them to be public.
		</p>
		<h3>Recording</h3>
		<ul>
			<li>
				We may record sessions for internal review and we'll notify you when we're going to record
				them.
			</li>
			<li>
				In case we want to publish a recording of a session we'll ask for the participants'
				permission to do so.
			</li>
		</ul>
		<h2>Contact us</h2>
		<p>
			If you have any questions or concerns about privacy or would like to talk to us about how we
			use and store your information, please get in touch.
		</p>
		<p>hello@codereading.club</p>
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
</style>
