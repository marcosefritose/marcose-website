<script>
	let hide = true;
	let snippet_1 = 'ram';
	let snippet_2 = 'heg@c';
	let snippet_3 = 'hcet.ekr';

	function reveal() {
		hide = false;
	}
</script>

<div class="relative">
	<img
		src="/images/marathon_marc_raw.jpg"
		class="mx-auto min-h-screen w-full max-w-7xl border-0 object-cover"
		alt=""
	/>
	<div class="absolute top-48 w-full">
		<div id="contactbox" class="mx-auto w-fit rounded-lg bg-white bg-opacity-80 py-5 px-10">
			<h1 class="mb-3 text-center text-xl font-bold">Contact</h1>

			<p class="my-2">
				<span class="reverse {hide ? 'hidden' : ''}"
					>{snippet_3}<span class="hidden">@bot</span>{snippet_2}<span class="hidden">@stop</span
					>{snippet_1}</span
				>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span class="reverse {hide ? '' : 'hidden'} cursor-pointer" on:click={reveal}>em wohs</span>
				<span class="reverse font-semibold">:liaM</span>
			</p>
			<p class="my-2">
				<span class="font-semibold">LinkedIn:</span>
				<a
					href="https://www.linkedin.com/in/marc-gehrke-a1a49a175"
					target="_blank"
					rel="noopener noreferrer">Marc Gehrke</a
				>
			</p>
			<p class="my-2">
				<span class="font-semibold">Github</span>
				<a href="https://github.com/marcosefritose/" target="_blank" rel="noopener noreferrer"
					>marcosefritose</a
				>
			</p>
			<p class="my-2">
				<span class="font-semibold">Discord:</span>
				<span>marcosefritose#0117</span>
			</p>
		</div>
	</div>
</div>
