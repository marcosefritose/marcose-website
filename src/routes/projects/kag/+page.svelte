<script>
	import Topic from '../topic.svelte';
</script>

<div class="flex w-full bg-light-blue">
	<div class="mx-auto  mt-28 max-w-6xl rounded-lg bg-light p-8">
		<div class="mb-6 flex w-full flex-col items-center gap-8 md:flex-row md:items-start">
			<!-- Project Card -->
			<div class="rounded-md bg-light p-4 md:max-w-xs">
				<div class="mx-auto max-w-sm md:max-w-none">
					<img
						src="/images/GAG_logo_full.png"
						class="object-contain px-4"
						alt="Geschichten aus der Geschichte Logo"
					/>
				</div>

				<div id="links" class="py-2">
					<p class="text-sm">Links</p>
					<span class="font-semibold">Website:</span>
					<a
						class="underline underline-offset-1"
						href="https://podiverse.io/demo"
						target="_blank"
						rel="noopener noreferrer">podiverse.io/demo</a
					>
					<br />
					<span class="font-semibold">Podcast:</span>
					<a
						class="underline underline-offset-1"
						href="https://www.geschichte.fm"
						target="_blank"
						rel="noopener noreferrer">geschichte.fm</a
					>
					<br />
					<span class="font-semibold">
						<a
							class="underline underline-offset-1"
							href="https://github.com/marcosefritose/karten_aus_der_geschichte"
							target="_blank"
							rel="noopener noreferrer">Github Repository</a
						>
					</span>
				</div>

				<div id="tags" class="py-2">
					<p class="text-sm">Tags</p>
					<!-- Tag Box -->
					<div class="pt-1">
						<Topic topic="Data Science" color="data" active={false} />
						<Topic topic="Web" color="web" active={false} />
					</div>
				</div>

				<div id="technologies" class="py-2">
					<p class="text-sm">Technologies</p>
					<!-- Tag Box -->
					<div class="flex flex-wrap gap-1 pt-1">
						<Topic topic="Apache Airflow" active={false} />
						<Topic topic="SvelteKit" active={false} />
						<Topic topic="Docker" active={false} />
						<Topic topic="Flask" active={false} />
						<Topic topic="d3" active={false} />
						<Topic topic="PostgreSQL" active={false} />
					</div>
				</div>

				<div id="languages" class="py-2">
					<p class="text-sm">Languages</p>
					<!-- Tag Box -->
					<div class="flex flex-wrap gap-1 pt-1">
						<Topic topic="Python" active={false} />
						<Topic topic="Javascript" active={false} />
						<Topic topic="SQL" active={false} />
						<Topic topic="HTML" active={false} />
						<Topic topic="CSS" active={false} />
					</div>
				</div>
			</div>

			<!-- Intro Text -->
			<div>
				<h1 class="mb-5 text-4xl font-semibold">Karten aus der Geschichte</h1>

				<p class="py-2">
					My all-time favorite history podcast, "Geschichten aus der Geschichte", tells a story from
					history each week. The creators of the podcast often refer to the concept of the
					"patchwork quilt of history" and their goal of weaving together stories from different
					times and places to gain a better understanding of historical events and the context in
					which they occurred.
				</p>
				<p class="py-2">
					As a somewhat visual thinker, the idea of a map-like and interactive visualization of this
					"patchwork" had been in the back of my mind for a long time. When I started looking for
					projects where I could try both implementing and running a data pipeline with Apache
					Airflow and a more complex, but most importantly fun and inspiring Sveltekit app,
					everything fell into place.
				</p>
				<p class="py-2">
					In the next sections I will first talk about the features that are available for users on
					the website. After that I will go a bit into detail about how the system is designed, what
					data and technologies were used and what experiences I have had with them.
				</p>
			</div>
		</div>

		<!-- Website Text -->
		<div class="mb-6">
			<h2 class="mb-2 text-2xl font-semibold">Website</h2>

			<p class="py-2">
				The main element of the website is the interactive world map on which every location that
				was mentioned in one of the podcast episodes is marked on. It allows you to zoom in and out,
				drag the map to different places and hover over the markers to see the location and all the
				episodes, that specific location was mentioned in.
			</p>
			<p class="py-2">
				With the episode list is works the other way around: Pick a single episode and see all the
				locations that were talked about. On selecting an episode the map automatically zooms in and
				highlight the associated locations and thus only shows the relevant part of the map.
			</p>

			<img
				src="/images/kag.png"
				class="m-4 mx-auto w-full"
				alt="Screenshot Karten aus der Geschichte"
			/>
		</div>

		<!-- Architecture Text -->
		<div class="mb-6">
			<h2 class="mb-2 text-2xl font-semibold">Architecture</h2>

			<p class="py-2">
				Like mentioned before this is mostly a fun side project, which enabled me to consolidate and
				put my data engineering skills to good use, as well channeling my creative energy and
				furhter improving on my frontend web development skills.
			</p>
			<p class="py-2">
				The rough technical architecture can be seen on the graph below. I will talk a bit about
				each part and my takeaways working with them in the following sections
			</p>

			<img
				src="/images/KAG_Architecture.png"
				class="mx-auto px-3"
				alt="System Architecture Karten aus der Geschichte"
			/>
		</div>

		<!-- Apache Airflow Text -->
		<div class="mb-6">
			<h2 class="mb-2 text-2xl font-semibold">Apache Airflow</h2>

			<p class="py-2">
				The data pipeline is executed daily and consists of the following main steps, which are also
				visualized in the architecture overview.
			</p>

			<ol class="my-2 list-inside list-decimal">
				<li>
					<span class="my-1 underline">Database Setup:</span> On the initial run of the pipeline this
					step creates the required database and tables, which will store the gathered data and serve
					the webserver lateron.
				</li>
				<li>
					<span class="my-1 underline">Scrape Data:</span> Checks the Podcast Feed for new episodes and
					downloads all relevant information to the database.
				</li>
				<li>
					<span class="my-1 underline">Cleaning: </span>This step removes unwanted formatting from
					the summary text, removes advertisment and extracts the Episode-ID from the title.
				</li>
				<li>
					<span class="my-1 underline">Entity Extraction:</span> Here I make use of NLP techniques to
					extract the locations mentioned from the available texts.
				</li>
				<li>
					<span class="my-1 underline">Data Enrichment:</span> Finally I use an external API Service
					to receive coordinates for the location name, which can be drawn onto the map.
				</li>
			</ol>

			<p class="py-2">
				The features Apache Airflow brings out of the box are amazing, but lead to it not being as
				lightweight as I hoped it to be. Additionally the main role of as a simple "job scheduler"
				was not clear to me in the beginning and I probably implemented more logic inside of Airflow
				Tasks than I should have. The setup using the available Docker Images was easily done and
				the provided UI and Monitoring capabilities intuitive to use. Working with and deploying a
				"pythonic" Datapipeline was enjoyable after previously working with Azure Data Factory and
				Azure Machine Learning, which focused on a code-free implementation of the Pipeline. I will
				most likely continue using Airflwo in following data driven projects if suitable.
			</p>
		</div>

		<!-- SvelteKit Text -->
		<div class="mb-6">
			<h2 class="mb-2 text-2xl font-semibold">SvelteKit</h2>

			<p class="py-2">
				The website itself was implemented with Svelte and uses the d3 package for map visualization
				and interactions. The maps are loaded as a .geojson file, on which previously collected
				coordinates can be mapped and displayed.
			</p>
			<p class="py-2">
				I chose SvelteKit after working with Vue and React in the past, and will most likely
				continue to use it for the foreseeable future as it has proven to be very developer
				friendly, well documented, flexible, and powerful. Given the project structure of SvelteKit
				in combination with TailwindCSS, the project seemed well organized and clean at all times
				and was a pleasure to work on.
			</p>
		</div>

		<!-- Flask Text -->
		<div class="mb-6">
			<h2 class="mb-2 text-2xl font-semibold">Flask</h2>

			<p class="py-2">
				The Python-based Flask server serves as a really straightforward API for the SvelteKit
				application and was quickly set up in a single file. I was pleasantly surprised by the
				simplicity and low overhead, having previously worked with the django framework.
			</p>
		</div>

		<!-- Docker Text -->
		<div class="mb-6">
			<h2 class="mb-2 text-2xl font-semibold">Docker</h2>

			<p class="py-2">
				I went for the extra mile at the beginning of development and "dockerized" the entire
				project by creating custom Docker Images for each component. Currently I use Docker Compose
				for both local development and hosting on a linux webserver. This ensures cloud portability
				and makes me independent of hosting and developing environments. Deploying a Kubernetes
				Cluster, which allows for easy scaling of the user-facing components, can easily be done
				when needed based on the already existing images.
			</p>
		</div>
	</div>
</div>
