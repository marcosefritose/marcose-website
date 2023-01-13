<script>
    import Topic from "../topic.svelte";
</script>

<div class="mt-28 max-w-7xl mx-auto px-4">
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
                My aboslute favorite history podcast “Geschichten aus der Geschichte” (stories out of history) tells a story out of history every week. The creators of the podcasts many time refered to the concept of the “patchwork of history” and their goal to link stories of various times and places together to get a better understanding of history as a whole. 
            </p>
            <p class="py-2">
                As a somewhat visual thinker the idea of map-like visualization of this “patchwork” was in the back of my head for a long time. When I was looking for projects where I could try out implementing and deploying a Data Pipeline in Apache Airflow as well as try a more complex, but mostly fun and inspiring Sveltekit App everything clicked together and you are reading about the result right here.
            </p>
            <p class="py-2">
                In the next sections I will first talk about the insteresting features that are available for users on the website. After that I will talk about how I got the relevant data and made it available.
            </p>
        </div>
    </div>
    
    <!-- Website Text -->
    <div class="mb-6">
        <h2 class="text-2xl mb-2 font-semibold">Website</h2>

        <p>
            The main element of the website is the interactive world map on which every location that was mentioned in one of the podcast episodes. It allows you to zoom in and out, drag the map to different places and hover over the markers to see the location and all the episodes, the location was mentioned in. 
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
            Like mentioned before this is mostly a fun side project, which enabled me to consolidate and put my data engineering skills to good use, as well channeling my creative energy and furhter improving on my frontend web development skills. 
        </p>
    </div>

    <!-- SvelteKit Text -->
    <div class="mb-6">
        <h2 class="text-2xl mb-2 font-semibold">SvelteKit</h2>

        <p>
            Like mentioned before this is mostly a fun side project, which enabled me to consolidate and put my data engineering skills to good use, as well channeling my creative energy and furhter improving on my frontend web development skills. 
        </p>
    </div>

    <!-- Flask Text -->
    <div class="mb-6">
        <h2 class="text-2xl mb-2 font-semibold">Flask</h2>

        <p>
            Like mentioned before this is mostly a fun side project, which enabled me to consolidate and put my data engineering skills to good use, as well channeling my creative energy and furhter improving on my frontend web development skills. 
        </p>
    </div>

    <!-- Docker Text -->
    <div class="mb-6">
        <h2 class="text-2xl mb-2 font-semibold">Docker</h2>

        <p>
            Like mentioned before this is mostly a fun side project, which enabled me to consolidate and put my data engineering skills to good use, as well channeling my creative energy and furhter improving on my frontend web development skills. 
        </p>
    </div>


</div>