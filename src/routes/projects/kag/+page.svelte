<script>
    import Topic from "../topic.svelte";
</script>

<div class="mt-28 max-w-6xl mx-auto px-4">
    <div class="flex flex-col items-center md:items-start md:flex-row gap-8 w-full mb-6">
        <!-- Project Card -->
        <div class="bg-slate-200 rounded-md p-4 md:max-w-xs">
            <div class="max-w-sm mx-auto md:max-w-none">
                <img src="/images/GAG_logo_full.png" class="object-contain px-4">
            </div>

            <div id="links" class="py-2">
                <p class="text-sm">Links</p>
                <span class="font-semibold">Website:</span> <a class="underline underline-offset-1" href="https://kag.marcose.eu"  target="_blank" rel="noopener noreferrer">kag.marcose.eu</a>
                <br>
                <span class="font-semibold">Podcast:</span> <a class="underline underline-offset-1" href="https://www.geschichte.fm"  target="_blank" rel="noopener noreferrer">geschichte.fm</a>
            </div>


            <div id="tags" class="py-2">
                <p class="text-sm">Tags</p>
                <!-- Tag Box -->
                <div class="pt-1">
                    <Topic topic="Data Science" color="data" active={false}/>
                    <Topic topic="Web" color="web" active={false}/>
                </div>
            </div>
            
            <div id="technologies" class="py-2">
                <p class="text-sm">Technologies</p>
                <!-- Tag Box -->
                <div class="pt-1 flex flex-wrap gap-1">
                    <Topic topic="Apache Airflow" active={false}/>
                    <Topic topic="SvelteKit" active={false}/>
                    <Topic topic="Flask" active={false}/>
                    <Topic topic="Docker" active={false}/>
                    <Topic topic="PostgreSQL" active={false}/>
                </div>
            </div>
            
            <div id="languages" class="py-2">
                <p class="text-sm">Languages</p>
                <!-- Tag Box -->
                <div class="pt-1 flex flex-wrap gap-1">
                    <Topic topic="Python" active={false}/>
                    <Topic topic="Javascript" active={false}/>
                    <Topic topic="SQL" active={false}/>
                    <Topic topic="HTML" active={false}/>
                    <Topic topic="CSS" active={false}/>
                </div>
            </div>
        </div>

        <!-- Intro Text -->
        <div>
            <h1 class="text-4xl mb-5 font-semibold">Karten aus der Geschichte</h1>

            <p class="py-2">
                My all-time favorite history podcast, "Geschichten aus der Geschichte", tells a story from history each week. The creators of the podcast often refer to the concept of the "patchwork quilt of history" and their goal of weaving together stories from different times and places to gain a better understanding of historical events and the context in which they occurred. 
            </p>
            <p class="py-2">
                As a somewhat visual thinker, the idea of a map-like and interactive visualization of this "patchwork" had been in the back of my mind for a long time. When I started looking for projects where I could try both implementing and running a data pipeline with Apache Airflow and a more complex, but most importantly fun and inspiring Sveltekit app, everything fell into place.
            </p>
            <p class="py-2">
                In the next sections I will first talk about the insteresting features that are available for users on the website. After that I will go into detail about how the system is designed and how I got the relevant data and made it available.
            </p>
        </div>
    </div>
    
    <!-- Website Text -->
    <div class="mb-6">
        <h2 class="text-2xl mb-2 font-semibold">Website</h2>

        <p>
            The main element of the website is the interactive world map on which every location that was mentioned in one of the podcast episodes is marked on. It allows you to zoom in and out, drag the map to different places and hover over the markers to see the location and all the episodes, that specific location was mentioned in. 
        </p>
        <p>
            With the episode list is works the other way around: Pick a single episode and see all the locations that were talked about.
        </p>
        <p>
            On selecting an episode the map automatically zooms in and highlight the associated locations and thus only shows the relevant part of the map.
        </p>

        <img src="/images/kag.png" class="w-full mx-auto m-4" alt="Screenshot Karten aus der Geschichte">
    </div>
    
    <!-- Architecture Text -->
    <div class="mb-6">
        <h2 class="text-2xl mb-2 font-semibold">Architecture</h2>

        <p>
            Like mentioned before this is mostly a fun side project, which enabled me to consolidate and put my data engineering skills to good use, as well channeling my creative energy and furhter improving on my frontend web development skills. 
        </p>
        <p>
            The rough technical architecture can be seen on the graph below. I will talk a bit about each part and my takeaways working with them in the following sections
        </p>
        
        <img src="/images/KAG_Architecture.png" class="px-3 mx-auto" alt="System Architecture Karten aus der Geschichte">
    </div>

    <!-- Apache Airflow Text -->
    <div class="mb-6">
        <h2 class="text-2xl mb-2 font-semibold">Apache Airflow</h2>

        <p>
            The Data Pipeline is run everyday and consists of the following main steps, which are also visualized in the architecture overview.
        </p>

        <ol class="list-decimal list-inside my-2">
            <li><span class="underline my-1">Database Setup:</span> On the initial run of the pipeline this step creates the required database and tables, which will store the gathered data and serve the webserver lateron.</li>
            <li><span class="underline my-1">Scrape Data:</span> Checks the Podcast Feed for new episodes and downloads all relevant information to the database.</li>
            <li><span class="underline my-1">Cleaning: </span>This step removes unwanted formatting from the summary text, removes advertisment and extracts the Episode-ID from the title.</li>
            <li><span class="underline my-1">Entity Extraction:</span> Here I make use of NLP techniques to extract the locations mentioned from the available texts.</li>
            <li><span class="underline my-1">Data Enrichment:</span> Finally I use an external API Service to receive coordinates for the location name, which can be drawn onto the map.</li>
        </ol>
    </div>

    <!-- SvelteKit Text -->
    <div class="mb-6">
        <h2 class="text-2xl mb-2 font-semibold">SvelteKit</h2>

        <p>
            tbd
        </p>
    </div>

    <!-- Flask Text -->
    <div class="mb-6">
        <h2 class="text-2xl mb-2 font-semibold">Flask</h2>

        <p>
            tbd
        </p>
    </div>

    <!-- Docker Text -->
    <div class="mb-6">
        <h2 class="text-2xl mb-2 font-semibold">Docker</h2>

        <p>
            tbd
        </p>
    </div>


</div>