<script>
	export const prerender = true;
	import '../app.css';
	import { page } from '$app/stores';

	let path;
	$: path = $page.url.pathname;
</script>

<div class="w-screen bg-light font-mono text-dark">
	<!-- <nav class="z-50 flex w-full justify-center">
		<div
			class="absolute top-10 z-50 flex w-fit justify-center gap-5 rounded-lg bg-light px-5 py-3 text-lg"
		>
			<a href="/" class={path === '/' ? 'underline' : ''}>Home</a>
			<a href="/projects" class={path === '/projects' ? 'underline' : ''}>Projects </a>
			<a href="/about" class={path === '/about' ? 'underline' : ''}>About</a>
			<a href="/CV_Marc_Gehrke.pdf" download="">CV</a>
			<a
				href="https://www.linkedin.com/in/marc-gehrke-a1a49a175"
				target="_blank"
				rel="noopener noreferrer"><img src="/icons/linkedin_icon.svg" alt="LinkedIn Icon" /></a
			>
			<a href="https://github.com/marcosefritose/" target="_blank" rel="noopener noreferrer"
				><img src="/icons/github_icon.svg" alt="GitHub Icon" /></a
			>
		</div>
	</nav> -->

	<slot />
</div>
