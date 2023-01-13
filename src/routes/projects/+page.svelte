<script>
	import Filter from "./filter.svelte";
	import Projectboard from "./projectboard.svelte";

    let selectedTopics = [];
</script>

<div class="mt-28 md:w-5/6 xl:w-3/4 mx-auto max-w-6xl text-center">
    <h2 class="text-3xl py-3">Projects</h2>

    <p class="py-3 mb-8">Besides my professional experience, I've been working on some cool stuff in the last few years as part of university projects or in my spare time. Have a look around!</p>
</div>

<Filter />

<Projectboard />