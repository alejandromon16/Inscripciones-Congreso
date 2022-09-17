<script lang="ts">
     export let title: string = 'Formulario de Inscripcion';
     export let size: number = undefined;
</script>

<div class="title">
    <h2>{title}</h2>
    <p>*la Inscripcion es COMPLETAMENTE GRATUITA</p>
</div>

<style lang="scss">
    h2{
        font-size: 18px;
        text-align: center;
        color: white;
    }

    p{
        font-size: 14px;
        color: var(--color-text-muted);
        padding: 0px 25px;
        text-align: center;
    }

    @media (min-width: 1200px){
        h2{
            font-size: 24px;
            letter-spacing: 0.2px;
        }
    }
</style>