<script>
    export let topic;
    export let color = 'dark';


    // Change color for predefined set of topics
    switch(topic) {
        case "Data Science":
            color = 'data';
            break;
        case "Web":
            color = 'web';
            break;
    }
</script>

<span 
    class="px-3 py-1 rounded-b-lg bg-{color} text-white text-sm opacity-80" 
>{topic}</span>