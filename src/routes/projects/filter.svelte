<script>
	import Topic from "./topic.svelte";

    let showAllTopics = false;

    function switchTopicDisplayMode() {
        showAllTopics = !showAllTopics;
    }
</script>

<div id="filter" class="md:w-5/6 xl:w-3/4 mx-auto max-w-6xl relative flex {showAllTopics ?  'flex-wrap' : 'overflow-x-scroll' } gap-2 py-2 mt-3 ">
    <!-- Main Topics -->
    <div class="relative flex border border-dashed border-gray-300 p-2 gap-1 rounded-md">
        <span class="absolute text-xs -top-2 bg-light text-gray-400">Topics</span>
        <Topic topic="DataSSScience" color="data"/>
        <Topic topic="Web" color="web"/>
        <Topic topic="University" color="gray-700"/>
    </div>
    <!-- Languages -->
    <div class="relative flex border border-dashed border-gray-300 p-2 gap-1 rounded-md">
        <span class="absolute text-xs -top-2 bg-light text-gray-400">Languages</span>
        <Topic topic="Python"/>
        <Topic topic="Javascript"/>
        <Topic topic="PHP"/>
        <Topic topic="HTML"/>
        <Topic topic="CSS"/>
    </div>
    <!-- Technology / Software -->
    <div class="relative flex  border border-dashed border-gray-300 p-2 gap-1 rounded-md">
        <span class="absolute text-xs -top-2 bg-light text-gray-400">Technology/Software</span>
        <Topic topic="Docker"/>
        <Topic topic="PowerBI"/>
        <Topic topic="Figma"/>
    </div>
    <!-- Frameworks -->
    <div class="relative flex  border border-dashed border-gray-300 p-2 gap-1 rounded-md">
        <span class="absolute text-xs -top-2 bg-light text-gray-400">Frameworks</span>
        <Topic topic="PyTorch"/>
        <Topic topic="Tensorflow"/>
        <Topic topic="Django"/>
        <Topic topic="Flask"/>
        <Topic topic="Laravel"/>
        <Topic topic="React"/>
        <Topic topic="SvelteKit"/>
        <Topic topic="TailwindCSS"/>
    </div>
</div>
<div class="w-full flex justify-center mb-3">
    <button on:click={switchTopicDisplayMode} class="text-sm">Show {showAllTopics ? 'less' : 'all'}</button>
</div>