<script>
    export let topics;
</script>

<div class="py-3">
    <div class="flex flex-col md:flex-row p-2 gap-2 rounded-lg border-dashed border">
        <img class="w-full md:w-1/3 lg:w-1/4 object-contain" src="/images/satellite_segmentation.png" alt="Satellite Segmentation Screenshot">
        <div class="flex-auto">
            <h3 class="text-xl font-medium">Satellite Image Segmentation</h3>
            <div class="flex py-2 gap-1 flex-wrap">
                <span class="px-3 py-1  text-sm border rounded-lg border-data 
                    {topics.includes('Data Science') ? 'text-white bg-data' : 'text-data'}">
                    Data Science
                </span>
                <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">University</span>
                <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">PyTorch</span>
                <span class="px-3 py-1  text-sm border rounded-lg border-dark text-dark">Tensorflow</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores nulla eos optio sequi natus commodi pariatur accusantium saepe, consequuntur quibusdam hic, cumque iste, dolor doloremque blanditiis voluptas incidunt praesentium?</p>
        </div>
</div>
</div>