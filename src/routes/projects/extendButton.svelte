<script>
    export let extended;
</script>

<span
    class="rounded-xl p-1 cursor-pointer font-bold text-dark"
    on:click={() => extended = !extended}
    on:keydown={() => extended = !extended}
>
    {extended ? '-' : '+'}
</span>