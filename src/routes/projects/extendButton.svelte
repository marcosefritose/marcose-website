<script>
	export let extended;
	export let showAllTopics;

	$: if (showAllTopics) extended = true;
</script>

<span
	class="cursor-pointer rounded-xl p-1 font-bold text-dark"
	on:click={() => (extended = !extended)}
	on:keydown={() => (extended = !extended)}
>
	{extended ? '-' : '+'}
</span>
