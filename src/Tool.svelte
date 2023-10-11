<script lang="ts">
	export let name: string;
	export let link: string;
	export let linkText: string;
	export let description: string;
</script>

<li>
	<div class="headline">
		<img src="/icon.svg" alt="" />
		<div>
			<a href={link}>
				<h3>
					{name}
				</h3>
				<p>
					{linkText}
				</p>
			</a>
		</div>
	</div>
	<p>
		{description}
	</p>
</li>

<style>
	li {
		margin-bottom: 2rem;
		width: 100%;
	}

	@media (min-width: 700px) {
		li {
			width: calc(50% - 3rem);
		}
	}

	h3 {
		color: var(--text);
	}

	.headline {
		display: flex;
		margin-bottom: 1rem;
		align-items: center;
	}

	img {
		height: 4rem;
		margin-right: 1rem;
		width: 4rem;
	}

	.headline a {
		border-radius: 8px;
		color: var(--text);
		display: block;
		padding: 0.5rem;
		text-decoration: none;
	}

	a p {
		word-break: break-all;
		text-decoration: underline;
	}
</style>
