<script>
    import CardForm from "$lib/components/CardForm.svelte";
    import Hero from "$lib/views/hero/Hero.svelte";
    import FormView from "$lib/views/Inscripciones/Inscripcion-Form.svelte";
	import { fade } from "svelte/transition";
</script>

<Hero 
    heroImgSrc="background.png"
/>


<div in:fade={{duration:500}} class="wrapper">
    <CardForm>
        <div class="content">
            <img src="/bien.png" alt="">
            <span>Gracias por inscribirte Alejandro Montero, proximante te enviaremos tu inscripcion.</span>
        </div>
    </CardForm>
</div>

<style lang="scss">
    
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        row-gap: 20px;
        padding: 30px 0px;
        color: var(--color-white);
        padding-top: var(--space-md);
        margin: 0px var(--space-xs);
    }
    .wrapper {
        display: flex;
        margin: 0px 30px;
    }
</style>
