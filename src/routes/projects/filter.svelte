<script>
	import Topic from './topic.svelte';
	import ExtendButton from './extendButton.svelte';

	let showAllTopics = false;

	let extendMainTopics = false;
	let extendLanguages = false;
	let extendTechnologies = false;
	let extendFrameworks = false;

	function switchTopicDisplayMode() {
		showAllTopics = !showAllTopics;
	}
</script>

<div
	id="filter"
	class="relative mx-auto flex max-w-6xl md:w-5/6 xl:w-3/4 {showAllTopics
		? 'flex-wrap'
		: 'overflow-x-scroll scrollbar scrollbar-thumb-gray-200 scrollbar-thin'} mt-3 gap-2 py-2 "
>
	<!-- Main Topics -->
	<div
		class="relative flex {showAllTopics
			? 'flex-wrap'
			: ''} mt-1 gap-1 rounded-md border-gray-300 p-2"
	>
		<span class="absolute -top-3 left-3 bg-light text-xs text-gray-400">Topics</span>
		<Topic topic="Data Science" color="data" />
		<Topic topic="Web" color="web" />
		<Topic topic="University" color="gray-700" />
	</div>
	<!-- Languages -->
	<div
		class="relative flex {showAllTopics
			? 'flex-wrap'
			: ''} mt-1 gap-1 rounded-md border-gray-300 p-2"
	>
		<span class="absolute -top-3 left-3 bg-light text-xs text-gray-400">Languages</span>
		<Topic topic="Python" />
		<Topic topic="Javascript" />
		<Topic topic="PHP" />
		{#if extendLanguages}
			<Topic topic="HTML" />
			<Topic topic="CSS" />
			<ExtendButton bind:extended={extendLanguages} {showAllTopics} />
		{:else}
			<ExtendButton bind:extended={extendLanguages} {showAllTopics} />
		{/if}
	</div>
	<!-- Technology / Software -->
	<div
		class="relative flex {showAllTopics
			? 'flex-wrap'
			: ''} mt-1 gap-1 rounded-md border-gray-300 p-2"
	>
		<span class="absolute -top-3 left-3 bg-light text-xs text-gray-400">Technology/Software</span>
		<Topic topic="Docker" />
		<Topic topic="Jupyter" />
		<Topic topic="Apache Airflow" />
		<Topic topic="PowerBI" />
		<Topic topic="Figma" />
	</div>
	<!-- Frameworks -->
	<div
		class="relative flex {showAllTopics
			? 'flex-wrap'
			: ''} mt-1 gap-1 rounded-md border-gray-300 p-2"
	>
		<span class="absolute -top-3 left-3 bg-light text-xs text-gray-400">Frameworks</span>
		<Topic topic="PyTorch" />
		<Topic topic="Tensorflow" />
		<Topic topic="Flask" />
		<Topic topic="SvelteKit" />
		<Topic topic="d3" />
		{#if extendFrameworks}
			<Topic topic="Django" />
			<Topic topic="Laravel" />
			<Topic topic="Tailwind" />
			<Topic topic="React" />
			<ExtendButton bind:extended={extendFrameworks} {showAllTopics} />
		{:else}
			<ExtendButton bind:extended={extendFrameworks} {showAllTopics} />
		{/if}
	</div>
</div>
<div class="my-3 flex w-full justify-center">
	<button on:click={switchTopicDisplayMode} class="text-sm underline underline-offset-2"
		>Show {showAllTopics ? 'less' : 'all'}</button
	>
</div>
