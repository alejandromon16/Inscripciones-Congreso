<script lang="ts">
    export let value:string = undefined;
    let selected = false;
    export let rol:string = undefined;
</script>

<select name={rol} bind:value style="color: { selected ? 'white': 'var(--color-text-muted)'} ;" on:input={(e) => {selected = true;}}>
    <option class="some" disabled selected value>Rol en la Congregacion</option>
    <option value="PASTOR PRINCIPAL">Pastor principal</option>
    <option value="PASTOR ASOCIADO">Pastor asociado</option>
    <option value="LIDER">Lider</option>
    <option value="MIEMBRO">Miembro</option>
</select>

<style>
    select{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--color-white);
        padding-bottom: 8px;
        outline: none;
    }
</style>