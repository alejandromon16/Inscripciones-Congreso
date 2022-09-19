<script>
    import CardForm from "$lib/components/CardForm.svelte";
	import Button from "$lib/components/global/Button.svelte";
    import Hero from "$lib/views/hero/Hero.svelte";
	import MoreInfoSection from "$lib/views/success/MoreInfo-section.svelte";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
    /** @type {import('./$types').PageData} */

    export let data;
    let canshare = false;
    onMount(() => {
        if(navigator.canShare){
            canshare = true;
        }
    })
    const tryShare = () => {
        if(navigator.canShare){
            navigator.share({
                text: 'Hey, no te puedes perder esta bendicion! inscribete aqui',
                url: 'https://www.avivamientobolivia.com/inscripciones'
            })
        }
    }
</script>

<Hero 
    heroImgSrc="/images/background.png"
/>


<div in:fade={{duration:500, delay:400}} class="wrapper">
    <CardForm>
        <div class="content">
            <div>
                <img src="/images/bien.png" alt="">
            </div>
            <div class="greeting">
                <span>Gracias por inscribirte <span class="name">{data.name}</span>, proximante te enviaremos tu inscripcion.</span>
            </div>
            {#if canshare}
                <div class="">
                    <Button fullWidth on:click={() => tryShare()}>
                        Invita a tus amigos
                    </Button>
                </div>
            {/if}
            <div class="advice">
                *mira nuestro video abajo
            </div>
        </div>
    </CardForm>
</div>

<MoreInfoSection />

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
        align-items: center;
        justify-content: center;
        margin: 0px 20px;
    }


    .name{
        text-transform: capitalize;
    }
    .advice{
        color: var(--color-text-muted)
    }

    span{ 
        color: white;
    }

    @media (min-width: 1200px){
        .content{
            font-size: 20px;
            padding: 20px 100px;
        }

        .greeting{
            display: flex;
        }
    }
</style>
