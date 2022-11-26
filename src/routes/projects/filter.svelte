<script>
	import Topic from "./topic.svelte";
</script>

<div id="filter" class="relative flex flex-wrap gap-2 py-2">
    <!-- Main Topics -->
    <div class="relative flex flex-wrap border border-dashed border-gray-300 p-2 gap-1 rounded-md">
        <span class="absolute text-xs -top-2 bg-light text-gray-400">Topics</span>
        <Topic topic="Data Science" color="data"/>
        <Topic topic="Web" color="web"/>
        <Topic topic="University"/>
    </div>
    <!-- Languages -->
    <div class="relative flex flex-wrap  border border-dashed border-gray-300 p-2 gap-1 rounded-md">
        <span class="absolute text-xs -top-2 bg-light text-gray-400">Languages</span>
        <Topic topic="Python"/>
        <Topic topic="Javascript"/>
        <Topic topic="PHP"/>
        <Topic topic="HTML"/>
        <Topic topic="CSS"/>
    </div>
    <!-- Technology / Software -->
    <div class="relative flex flex-wrap  border border-dashed border-gray-300 p-2 gap-1 rounded-md">
        <span class="absolute text-xs -top-2 bg-light text-gray-400">Technology/Software</span>
        <Topic topic="Docker"/>
        <Topic topic="PowerBI"/>
        <Topic topic="Figma"/>
    </div>
    <!-- Frameworks -->
    <div class="relative flex flex-wrap  border border-dashed border-gray-300 p-2 gap-1 rounded-md">
        <span class="absolute text-xs -top-2 bg-light text-gray-400">Frameworks</span>
        <Topic topic="PyTorch"/>
        <Topic topic="Tensorflow"/>
        <Topic topic="Django"/>
        <Topic topic="Laravel"/>
        <Topic topic="React"/>
        <Topic topic="SvelteKit"/>
        <Topic topic="TailwindCSS"/>
    </div>
</div>