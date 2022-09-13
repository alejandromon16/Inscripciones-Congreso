<script>
    import Hero from "$lib/views/hero/Hero.svelte";
    import FormView from "$lib/views/Inscripciones/Inscripcion-Form.svelte";
</script>

<Hero 
    heroImgSrc="background.png"
    descrition="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos, hic itaque mollitia ab optio iure sequi saepe amet facere laboriosam velit. Laboriosam exercitationem repellat quasi enim laudantium vitae illum!"
/>
<div class="content">
    <div class="form">
        <FormView/>
    </div>
</div>

<style lang="scss">
    
    .form {
        padding-top: var(--space-md);
        margin: 0px var(--space-xs);
    }
</style>
