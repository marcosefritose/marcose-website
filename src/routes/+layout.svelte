<script>
    export const prerender = true;
    
    import "../app.css";
    import { page } from '$app/stores';

    let path;
    $: path = $page.url.pathname;
</script>

<div class="w-screen">
    <div class="w-full flex justify-center text-lg p-5 gap-5">
        <a href="/" class="{path === "/" ? 'underline' : ''}">Home</a>
        <a href="/projects" class="{path === "/projects" ? 'underline' : ''}">Projects </a>
        <a href="/about" class="{path === "/about" ? 'underline' : ''}">About</a>
        <a href="/CV_Marc_Gehrke.pdf" download="">CV</a>
        <a href="https://www.linkedin.com/in/marc-gehrke-a1a49a175" target="_blank" rel="noopener noreferrer"><img src="/icons/linkedin_icon.svg" alt="LinkedIn Icon"></a>
        <a href="https://github.com/marcosefritose/" target="_blank" rel="noopener noreferrer"><img src="/icons/github_icon.svg" alt="GitHub Icon"></a>
    </div>
    
    <div class="md:w-5/6 xl:w-3/4 mx-auto max-w-6xl">
        <slot />
    </div>
</div>
    
