import { writable } from 'svelte/store';

export const topics = writable([]);

export const projects = [
    {
        id: 1,
        title: 'Karten aus der Geschichte',
        image_path: '/images/kag_board.png',
        detail_path: '/projects/kag',
        topics: ["Data Science", "Web", "Apache Airflow", "SvelteKit", "Docker", "d3", "Tailwind", "Flask", "Python", "Javascript", "CSS", "HTML"],
        descrition: 'One of my favorite german podacasts called “Geschichten aus der Geschichte” tells a new story from history every week. I built a pipeline that reads their podcast feed, cleans the available data, transcribes the podcast and extracts all mentioned locations. An interactive map lets the user discover the places where history took place and how the map changes throughout the centuries.',
        links: [
            {
                title: 'More Info',
                url: '/projects/kag'
            },
            {
                title: 'Github',
                url: '/projects/kag'
            }
        ]
    },
    {
        id: 2,
        title: 'Satellite Image Segmentation',
        image_path: '/images/satellite_segmentation.png',
        detail_path: '/projects/satellite_segmentation',
        topics: ["Data Science", "University", "PyTorch", "Tensorflow", "Python", "Jupyter"],
        descrition: 'As part of the course "Data Analytics 2"  we had to solve the issue of image segmentation using advanced machine learning techniques. The goal was to classify the land-usage and coverage for a single picture in a satelite image. After using many different complex architecture and big sets of augmented data we settled with a boosted tree approach which only take one pixel for inference.'
    },
    {
        id: 3,
        title: 'Spotify Vector Machince',
        image_path: '/images/svm.png',
        detail_path: '/projects/svm',
        topics: ["Data Science", "Web", "University", "React", "Django", "Docker", "Tailwind", "Figma", "Python", "Javascript", "CSS", "HTML"],
        descrition: 'As part of the "Data Integration" course at the WWU we developed an interactive recommender system for Spotify. Our goal was to enable users to generate personalized playlists not only for one specific mood, but playlists which represent the transition from one mood to another. The outcome was a Web-App we called “Spotify Vector Machine” or short “SVM”, perfectly persoinalized for our Professor who has a strong background in Support Vector Machines. Users can draw vectors on an emotion-grid, select user profile. The newly created playlist can be checked out on the website or in their favorite Spotify client.'
    },
    {
        id: 4,
        title: 'Personal Website',
        image_path: '/images/marcose.png',
        detail_path: '/projects/website',
        topics: ["Web", "SvelteKit", "Figma", "Javascript", "CSS", "HTML"],
        descrition: 'That’s quite meta, isn’t it? Besides serving the purposes of having a personal website it also taught me how to build SvelteKit Apps and functions as a playground for my creative and meme energy. You can find the code on my github and a couple of eastereggs well hidden on the site aswell.'
    }
]