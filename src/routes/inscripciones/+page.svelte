<script>
    import Hero from "$lib/views/hero/Hero.svelte";
    import FormView from "$lib/views/Inscripciones/Inscripcion-Form.svelte";
    import { fade } from 'svelte/transition';
</script>

<Hero 
    heroImgSrc="background.png"
    descrition="Venid a las aguas.
    Es tiempo de entrar en la ola del Espíritu y vivir un poderoso Avivamiento en nuestra nación.
    Ya te inscribiste? Regístrate aquí"
/>
<div transition:fade={{duration:500}} class="content">
    <div class="form">
        <FormView/>
    </div>
</div>

<style lang="scss">
    
    .form {
        padding-top: var(--space-md);
        margin: 0px var(--space-xs);
    }

    @media only screen and (min-width: 768px) {
        .form {
            margin: 0px var(--space-2xl);
            padding: 0px var(--space-md);
        }
    }
</style>
