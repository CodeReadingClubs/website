<script>
	import Container from '../../Container.svelte';
	import Pattern from '../../Pattern.svelte';
	import Tool from '../../Tool.svelte';
</script>

<svelte:head>
	<title>Code Reading Club | Tools and Resources</title>
</svelte:head>

<Pattern>
	<Container>
		<h1>Tools and Resources</h1>
		<h2>Tools</h2>
		<ul>
			<Tool
				name="Annotation Tool"
				link="https://annotate.codereading.club/"
				linkText="annotate.codereading.club"
				description="Use the annotation tool to import files from GitHub and hightlight parts of the code. Hightlighted areas can be linked with arrows to make connections, and individual lines of code can be marked."
			/>
			<Tool
				name="PDF Maker"
				link="https://pdf.codereading.club/"
				linkText="pdf.codereading.club"
				description="Convert code from GitHub to PDFs for printing, ready to use in in-person code reading sessions."
			/>
		</ul>
		<h2>Resources</h2>
		<p>
			We're working on bringing our resources to this site, but for now they're stored on our GitHub
			Resources repository.
		</p>
		<a href="https://github.com/CodeReadingClubs/Resources">Code Reading Resources</a>
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
		margin-bottom: 2rem;
		margin-top: 2rem;
	}

	ul {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 700px) {
		ul {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	a {
		color: var(--text);
		display: block;
		margin: 2rem 0;
	}
</style>
