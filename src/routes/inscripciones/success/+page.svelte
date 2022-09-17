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
                text: 'Hey, no te puedes perder esta bendicion bro',
                url: 'https://avivamientobolivia.com/inscripciones'
            })
        }
    }
</script>

<Hero 
    heroImgSrc="background.png"
/>


<div in:fade={{duration:500, delay:400}} class="wrapper">
    <CardForm>
        <div class="content">
            <div>
                <img src="/bien.png" alt="">
            </div>
            <div class="greeting">
                <span>Gracias por inscribirte <span class="name">{data.fullName}</span>, proximante te enviaremos tu inscripcion.</span>
            </div>
            {#if canshare}
                <div class="">
                    <Button on:click={() => tryShare()} text="invita a tus amigos" />
                </div>
            {/if}
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
