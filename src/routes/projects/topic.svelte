<script>
    import { topics } from './store.js';
    
    export let topic;
    export let color = 'dark';
    export let active = true;
    
    let selectedTopics;
    
    topics.subscribe(value => {
        selectedTopics = value;
    });

    // Change color for predefined set of topics
    switch(topic) {
        case "Data Science":
            color = 'data';
            break;
        case "Web":
            color = 'web';
            break;
    }

    
    function selectTopic(topic) {
        if(!active) {
            console.log('qweqwe');
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
    class="px-3 py-1 border rounded-lg border-{color} 
    {selectedTopics.includes(topic) ? 'text-white bg-'+color : 'text-'+color}
    {active ? 'cursor-pointer text-sm' : 'text-xs'}" 
    on:click={() => selectTopic(topic)}
>{topic}</span>