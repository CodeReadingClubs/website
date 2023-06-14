<script lang="ts">
	export let name: string;
	export let date: string;
	export let link: string;
	export let online: boolean;

	const eventDate = new Date(date);

	const displayDate = eventDate.toLocaleDateString('en-UK', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	const timeDisplay = eventDate.toLocaleTimeString('en-UK', {
		hour: '2-digit',
		minute: '2-digit',
		timeZoneName: 'short'
	});
</script>

<a href={link} class="card" target="_blank">
	<div class="time-info">
		<time>{displayDate}</time>
		<time>{timeDisplay}</time>
	</div>
	<div class="name">
		{name}
	</div>
	<div>{online ? 'Online event' : 'In-person event'}</div>
</a>

<style>
	.card {
		background-color: var(--white);
		border-radius: 8px;
		box-shadow: 4px 4px 0px var(--gray4);
		color: var(--text);
		display: block;
		padding: 1rem;
		text-decoration: none;
	}

	.time-info {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}

	time {
		font-weight: bold;
		font-size: 90%;
	}

	.name {
		min-height: 6rem;
	}
</style>
