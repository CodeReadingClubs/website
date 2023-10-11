<script>
	import Container from './Container.svelte';
</script>

<header>
	<Container>
		<div>
			<a href="/" class="logo">
				Code&nbsp;<span class="highlight">Reading</span>&nbsp;Club
			</a>
			<nav>
				<ul>
					<li>
						<a href="/resources">Resources</a>
					</li>
				</ul>
			</nav>
		</div>
	</Container>
</header>

<style>
	header {
		align-items: center;
		background: var(--white);
		border-bottom: 2px solid var(--gray4);
		display: flex;
		justify-content: space-between;
		min-height: 4rem;
		width: 100%;
	}

	div {
		align-items: center;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	a {
		border-radius: 8px;
		color: var(--text);
		font-family: 'Ubuntu Mono', monospace;
		font-size: 140%;
		padding: 0.5rem;
		text-decoration: none;
	}
	@media (min-width: 700px) {
		a {
			font-size: 170%;
		}
	}

	.highlight {
		background: var(--teal);
		border-radius: 8px;
		color: var(--text);
		margin: -0.3em;
		padding: 0.2em;
	}

	nav a {
		font-size: 100%;
		text-decoration: underline;
		text-decoration-color: var(--orange);
		text-decoration-thickness: 5px;
		text-underline-offset: 5px;
	}

	@media (min-width: 700px) {
		nav a {
			font-size: 140%;
		}
	}
</style>
