<script lang="ts">
    export let text: string = "Enviar";
</script>

<button on:click>
    {text}
</button>

<style>
    button {
        padding: 8px calc(var(--space-xs) + 6px);
        background-color: white;
        color: black;
        border-radius: 20px;
        font-weight: 600;
    }
</style>