<script>
    import { topics } from "./store";
    import Topic from "./topic.svelte";
    import Badge from "./badge.svelte";
    
    let selectedTopics;
    
    topics.subscribe(value => {
        selectedTopics = value;
    });

    let foldOut = false;

    let projects = [
        {
            id: 1,
            title: 'Satellite Image Segmentation',
            image_path: '/images/satellite_segmentation.png',
            detail_path: '/projects/svm',
            topics: ["Data Science", "University", "PyTorch", "Tensorflow", "Python"],
            descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores nulla eos optio sequi natus commodi pariatur accusantium saepe, consequuntur quibusdam hic, cumque iste, dolor doloremque blanditiis voluptas incidunt praesentium?'
        },
        {
            id: 2,
            title: 'Spotify Vector Machince',
            image_path: '/images/svm.png',
            detail_path: '/projects/svm',
            topics: ["Data Science", "Web", "University", "React", "Django", "Python", "Javascript", "CSS", "HTML"],
            descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores nulla eos optio sequi natus commodi pariatur accusantium saepe, consequuntur quibusdam hic, cumque iste, dolor doloremque blanditiis voluptas incidunt praesentium?'
        },
        {
            id: 3,
            title: 'Karten aus der Geschichte',
            image_path: '/images/kag.png',
            detail_path: '/projects/kag',
            topics: ["Data Science", "Web", "SvelteKit", "Flask", "Python", "Javascript", "CSS", "HTML"],
            descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores nulla eos optio sequi natus commodi pariatur accusantium saepe, consequuntur quibusdam hic, cumque iste, dolor doloremque blanditiis voluptas incidunt praesentium?'
        },
        {
            id: 4,
            title: 'Personal Website',
            image_path: '/images/marcose.png',
            detail_path: '/projects/svm',
            topics: ["Web", "SvelteKit", "Javascript", "CSS", "HTML"],
            descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores nulla eos optio sequi natus commodi pariatur accusantium saepe, consequuntur quibusdam hic, cumque iste, dolor doloremque blanditiis voluptas incidunt praesentium?'
        },
        {
            id: 5,
            title: 'Personal Website',
            image_path: '/images/marcose.png',
            detail_path: '/projects/svm',
            topics: ["Web", "SvelteKit", "Javascript", "CSS", "HTML"],
            descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores nulla eos optio sequi natus commodi pariatur accusantium saepe, consequuntur quibusdam hic, cumque iste, dolor doloremque blanditiis voluptas incidunt praesentium?'
        },
        {
            id: 6,
            title: 'Personal Website',
            image_path: '/images/marcose.png',
            detail_path: '/projects/svm',
            topics: ["Web", "SvelteKit", "Javascript", "CSS", "HTML"],
            descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores nulla eos optio sequi natus commodi pariatur accusantium saepe, consequuntur quibusdam hic, cumque iste, dolor doloremque blanditiis voluptas incidunt praesentium?'
        },
    ]

    $: filteredProjects = filterProjects(projects, selectedTopics)

    function filterProjects(projects, selectedTopics) {
        if(selectedTopics.length === 0) {
            return projects;
        } else {
            return projects.filter(project => project.topics.some(t => selectedTopics.includes(t)));
        }
    }

    function toggleFoldOut() {
        foldOut = !foldOut;
    }

    
    </script>

<div class="py-5 flex flex-col gap-4 bg-light-blue">

    {#each filteredProjects as project (project.id)}
    <div class="flex flex-col md:flex-row px-3 pb-3 gap-2 rounded-lg md:w-5/6 xl:w-3/4 mx-auto max-w-6xl bg-light">
        <div class="flex-auto ml-3">
            <div class="flex gap-2">
                {#each project.topics as topic}
                    {#if topic === 'Data Science' || topic === 'Web'}
                        <Badge topic="{topic}"/>
                    {/if}
                {/each}
            </div>
            <h3 class="text-xl font-semibold mt-4">{project.title}</h3>
            <div class="flex py-2 gap-1 flex-wrap">
                {#each project.topics as topic}
                    {#if topic !== 'Data Science' && topic !== 'Web'}
                        <Topic topic="{topic}" active={false}/>
                    {/if}
                {/each}
            </div>
            <p class="font-sans my-2">{project.descrition}</p>
            <a class="underline inline-block" href="{project.detail_path}">More Info</a>
        </div>
        <img class="w-full md:w-1/3 lg:w-1/4 object-contain bg-light-blue p-3 mt-3" src="{project.image_path}" alt="Satellite Segmentation Screenshot">
    </div>
    {/each}
    
    <!-- <div class="w-full border border-b-2 border-gray-700 my-3"></div>
    
        <div class="rounded-lg border-dashed border mb-10">
            <div class="flex flex-col md:flex-row p-3 gap-2 ">
                <img class="w-full md:w-1/3 lg:w-1/4 object-contain" src="/images/kag.png" alt="Satellite Segmentation Screenshot">
                <div class="flex-auto">
                    <h3 class="text-xl font-semibold">Fold Out Test</h3>
                    <div class="flex py-2 gap-1 flex-wrap">
                        {#each ['Bla', 'Blaa', 'Blaaa'] as topic}
                        <Topic topic="{topic}" active={false}/>
                        {/each}
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptates ipsa praesentium animi, sint accusamus ducimus atque eligendi excepturi autem voluptatem commodi maiores id vero sequi iure iste quia mollitia!</p>
                    <button class="font-semibold underline hover:cursor-pointer py-2" on:click={toggleFoldOut}>{foldOut ? 'Less' : 'More'} Info</button>
                </div>
            </div>
            <div class="p-5 {foldOut ? '' : 'hidden'}">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora quidem repudiandae sunt, ex, inventore reiciendis molestias explicabo deserunt autem minima eos rem. Fugit cum amet itaque voluptas maiores? Eum.
            </div>
        </div>
    
    <div class="flex flex-col md:flex-row gap-2 rounded-lg border-dashed border">
        <div class="relative w-full md:w-1/3 lg:w-1/4 bg-slate-500">
            <img class="w-full object-contain" src="/images/land.png" alt="Satellite Segmentation Screenshot">
            <img class="absolute top-0 w-full animate-pulse-slow object-contain" src="/images/label.png" alt="Satellite Segmentation Screenshot">
        </div>
        <div class="flex-auto py-3 lg:w-3/4 md:w-2/3 w-full">
            <h3 class="text-xl font-semibold">Animation Test</h3>
            <div class="flex py-2 gap-1 flex-wrap">
                {#each ['Web', 'Data Sciene'] as topic}
                <Topic topic="{topic}" active={false}/>
                {/each}
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, id illum. Autem nobis quidem harum voluptate fugiat. Consectetur laborum, beatae maxime alias velit nisi odit soluta et, repellendus in expedita.</p>
            <a href="/1">More Info</a>
        </div>
    </div> -->
</div>