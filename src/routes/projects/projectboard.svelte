<script>
    import { topics } from "./store";
    import Topic from "./topic.svelte";
    
    let selectedTopics;
    
    topics.subscribe(value => {
        selectedTopics = value;
    });

    let projects = [
        {
            title: 'Satellite Image Segmentation',
            image_path: '/images/satellite_segmentation.png',
            detail_path: '/projects/svm',
            topics: ["Data Science", "University", "PyTorch", "Tensorflow", "Python"],
            descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores nulla eos optio sequi natus commodi pariatur accusantium saepe, consequuntur quibusdam hic, cumque iste, dolor doloremque blanditiis voluptas incidunt praesentium?'
        },
        {
            title: 'Spotify Vector Machince',
            image_path: '/images/svm.png',
            detail_path: '/projects/svm',
            topics: ["Web", "University", "React", "Django", "Python", "Javascript", "CSS", "HTML"],
            descrition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores nulla eos optio sequi natus commodi pariatur accusantium saepe, consequuntur quibusdam hic, cumque iste, dolor doloremque blanditiis voluptas incidunt praesentium?'
        },
        {
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

    
</script>

<div class="py-3 flex flex-col gap-2">

    {#each filteredProjects as project}
    <div class="flex flex-col md:flex-row p-3 gap-2 rounded-lg border-dashed border">
        <div class="flex-auto">
            <h3 class="text-xl font-semibold">{project.title}</h3>
            <div class="flex py-2 gap-1 flex-wrap">
                {#each project.topics as topic}
                <Topic topic="{topic}" active={false}/>
                {/each}
            </div>
            <p>{project.descrition}</p>
            <a href="{project.detail_path}">More Info</a>
        </div>
        <img class="w-full md:w-1/3 lg:w-1/4 object-contain" src="{project.image_path}" alt="Satellite Segmentation Screenshot">
    </div>
    {/each}

</div>