<script>
	import Filter from './filter.svelte';
	import Projectboard from './projectboard.svelte';

	let selectedTopics = [];
</script>

<div class="mx-auto mt-28 max-w-6xl text-center md:w-5/6 xl:w-3/4">
	<h2 class="py-3 text-3xl">Projects</h2>

	<p class="mb-8 py-3">
		Besides my professional experience, I've been working on some cool stuff in the last few years
		as part of university projects or in my spare time. Have a look around!
	</p>
</div>

<Filter />

<Projectboard />
