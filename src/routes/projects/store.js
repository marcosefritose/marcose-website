import { writable } from 'svelte/store';

export const topics = writable([]);

export const projects = [
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
        descrition: 'As part of the Data Integration course at the WWU we developed an interactive recommender system for Spotify. Our goal was to enable users to generate personalized playlists not only for one specific mood, but playlists which represents the transition from one mood to another. The outcome was a Web-App we called “Spotify Vector Machine” or short “SVM”, perfectly persoinalized for our Professor who heavily studies Support Vector Machines.'
    },
    {
        id: 3,
        title: 'Karten aus der Geschichte',
        image_path: '/images/kag.png',
        detail_path: '/projects/kag',
        topics: ["Data Science", "Web", "SvelteKit", "Flask", "Python", "Javascript", "CSS", "HTML"],
        descrition: 'One of my favorite german podacasts called “Geschichten aus der Geschichte” tells a new story every week. I used their podcast feed and transcribed their podcast in order to extract all mentioned places that were mentioned in a given episode. An interactive map lets the user discover the places where history took place and how the map changes throughout the centuries.'
    },
    {
        id: 4,
        title: 'Personal Website',
        image_path: '/images/marcose.png',
        detail_path: '/projects/svm',
        topics: ["Web", "SvelteKit", "Javascript", "CSS", "HTML"],
        descrition: 'That’s quite meta, isn’t it? Besides serving the purposes of having a personal website it also taught me how to build SvelteKit Apps for the first time and a playground for my creative and meme energy. You can find the code on my github and a couple of eastereggs well hidden on the site aswell.'
    }
]