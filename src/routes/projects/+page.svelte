<script>
	import Filter from "./filter.svelte";
	import Projectboard from "./projectboard.svelte";

    let selectedTopics = [];
</script>

<div class="w-full md:w-3/4 mx-auto">
    <h2 class="text-2xl">Projects</h2>

    <p class="py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolore nisi culpa a velit reiciendis eos praesentium est eaque, nesciunt officia exercitationem modi doloremque maiores magnam veritatis aperiam voluptatibus excepturi.</p>
    
    <Filter />

    <Projectboard />
</div>