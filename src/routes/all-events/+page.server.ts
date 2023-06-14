import { API_KEY, CUSTOM_EVENTS } from '$env/static/private';

export async function load() {
	const data = await fetch('https://www.eventbriteapi.com/v3/organizations/709986386203/events/', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'Content-Type': 'application/json'
		}
	});

	const crcEvents = await data.json();

	// Retrieve any events we want from outside of our organisation
	const customEventIds = CUSTOM_EVENTS.split(', ');

	const promises = await Promise.all(
		customEventIds.map((id) => {
			return fetch(`https://www.eventbriteapi.com/v3/events/${id}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${API_KEY}`,
					'Content-Type': 'application/json'
				}
			});
		})
	);

	const customEvents = await Promise.all(promises.map((promise) => promise.json()));

	return { events: [...customEvents, ...crcEvents.events] };
}
