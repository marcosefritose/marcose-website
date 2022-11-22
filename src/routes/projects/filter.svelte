<script>
    export let selectedTopics;

    function selectTopic(topic) {
        if(selectedTopics.includes(topic)) {
            selectedTopics = selectedTopics.filter(function(el){ 
                return el != topic; 
            });
        } else {
            selectedTopics = [...selectedTopics, topic];
        }
    }
</script>

<div id="filter" class="relative flex flex-wrap gap-2 py-2">
    <!-- Main Topics -->
    <div class="relative flex flex-wrap border border-dashed border-gray-300 p-2 gap-1 rounded-md">
        <span class="absolute text-xs -top-2 bg-light text-gray-400">Topics</span>
        <span 
            class="px-3 py-1  text-sm border rounded-lg border-data 
            {selectedTopics.includes('Data Science') ? 'text-white bg-data' : 'text-data'}" 
            on:click={() => selectTopic('Data Science')}
        >
            Data Science
        </span>
        <span class="px-3 py-1  text-sm border rounded-lg border-web text-web">Web</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">University</span>
    </div>
    <!-- Languages -->
    <div class="relative flex flex-wrap  border border-dashed border-gray-300 p-2 gap-1 rounded-md">
        <span class="absolute text-xs -top-2 bg-light text-gray-400">Languages</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">Python</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">Javascript</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">PHP</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">HTML</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">CSS</span>
    </div>
    <!-- Technology / Software -->
    <div class="relative flex flex-wrap  border border-dashed border-gray-300 p-2 gap-1 rounded-md">
        <span class="absolute text-xs -top-2 bg-light text-gray-400">Technology/Software</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">Docker</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">PowerBI</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">Figma</span>
    </div>
    <!-- Frameworks -->
    <div class="relative flex flex-wrap  border border-dashed border-gray-300 p-2 gap-1 rounded-md">
        <span class="absolute text-xs -top-2 bg-light text-gray-400">Frameworks</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">PyTorch</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">Tensorflow</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">Django</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">Laravel</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">React</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">SvelteKit</span>
        <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">TailwindCSS</span>
    </div>
</div>