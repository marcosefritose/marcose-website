<script>
    let hide = true
    let snippet_1 = 'hegm'
    let snippet_2 = 'ocram@ekr'
    let snippet_3 = 'ue.es'

    function reveal() {
        hide = false

    }
</script>

<div class="relative">
    <img src="/images/marathon_marc_raw.jpg" class="border-0 w-full min-h-screen max-w-7xl mx-auto object-cover" alt="">
    <div class="absolute top-48 w-full">
        <div id="contactbox" class="bg-white bg-opacity-80 rounded-lg w-fit mx-auto py-5 px-10">
        <h1 class="text-xl font-bold text-center mb-3">Contact</h1>

            <p class="my-2">
                <span class="reverse {hide ? 'hidden' : ''}">{snippet_3}<span class="hidden">@bot</span>{snippet_2}<span class="hidden">@stop</span>{snippet_1}</span>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <span class="reverse {hide ? '' : 'hidden'} cursor-pointer" on:click={reveal}>em wohs</span>
                <span class="reverse font-semibold">:liaM</span> 
            </p>
            <p class="my-2">
                <span class="font-semibold">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/marc-gehrke-a1a49a175" target="_blank" rel="noopener noreferrer">Marc Gehrke</a>
            </p>
            <p class="my-2">
                <span class="font-semibold">Github</span>
                <a href="https://github.com/marcosefritose/" target="_blank" rel="noopener noreferrer">/marcosefritose</a>
            </p>
            <p class="my-2">
                <span class="font-semibold">Discord:</span>
                <span>marcosefritose#0117</span>
            </p>
        </div>
    </div>
</div>