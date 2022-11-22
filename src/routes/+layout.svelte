<script>
    export const prerender = true;
    
    import "../app.css";
</script>

<div class="bg-light w-screen">
    <div class="w-full flex justify-center text-lg p-5 gap-5">
        <a href="/">/ </a>
        <a href="/projects">/projects </a>
        <a href="/about">/about</a>
        <a href="#">CV</a>
        <a href="https://www.linkedin.com/in/marc-gehrke-a1a49a175" target="_blank" rel="noopener noreferrer"><img src="/icons/linkedin_icon.svg"></a>
        <a href="https://github.com/marcosefritose/" target="_blank" rel="noopener noreferrer"><img src="/icons/github_icon.svg"></a>
    </div>
    
    <slot />
</div>
    
