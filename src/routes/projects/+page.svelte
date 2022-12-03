<script>
	import Filter from "./filter.svelte";
	import Projectboard from "./projectboard.svelte";

    let selectedTopics = [];
</script>

<div class="mt-24">
    <div class="md:w-5/6 xl:w-3/4 mx-auto max-w-6xl text-center">
        <h2 class="text-3xl py-3">Projects</h2>
    
        <p class="py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolore nisi culpa a velit reiciendis eos praesentium est eaque, nesciunt officia exercitationem modi doloremque maiores magnam veritatis aperiam voluptatibus excepturi.</p>
    </div>
    
    <Filter />

    <Projectboard />
</div>