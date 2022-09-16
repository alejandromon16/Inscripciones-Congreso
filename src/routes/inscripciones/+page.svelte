<script>
    import Hero from "$lib/views/hero/Hero.svelte";
    import FormView from "$lib/views/Inscripciones/Inscripcion-Form.svelte";
</script>

<Hero 
    heroImgSrc="background.png"
    descrition="Venid a las aguas.
    Es tiempo de entrar en la ola del Espíritu y vivir un poderoso Avivamiento en nuestra nación.
    Ya te inscribiste? Regístrate aquí"
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
