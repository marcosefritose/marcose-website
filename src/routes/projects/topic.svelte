<script>
    import { topics } from './store.js';
    
    export let topic;
    export let color = 'dark';
    export let active = true;
    
    let selectedTopics;
    
    topics.subscribe(value => {
        selectedTopics = value;
    });
    
    function selectTopic(topic) {
        if(!active) {
            return null;
        }

        if(selectedTopics.includes(topic)) {
            topics.set(selectedTopics.filter(function(el){ 
                return el != topic; 
            }));
        } else {
            topics.set([...selectedTopics, topic]);
        }
    }
</script>

<span 
    class="px-3 py-1 border rounded-xl whitespace-nowrap border-{color}
    {selectedTopics.includes(topic) ? 'text-white bg-opacity-70 bg-'+color : 'text-'+color}
    {active ? 'cursor-pointer text-sm' : 'text-xs'}" 
    on:click={() => selectTopic(topic)}
    on:keydown={() => selectTopic(topic)}
>{topic}</span>