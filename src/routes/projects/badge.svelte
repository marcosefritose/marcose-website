<script>
	export let topic;
	export let color = 'dark';

	// Change color for predefined set of topics
	switch (topic) {
		case 'Data Science':
			color = 'data';
			break;
		case 'Web':
			color = 'web';
			break;
	}
</script>

<span class="rounded-b-lg px-3 py-1 bg-{color} text-sm text-white opacity-80">{topic}</span>
