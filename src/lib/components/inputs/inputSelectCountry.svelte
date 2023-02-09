<script lang="ts">
    export let value:string = undefined;
    let selected = false;
    export let rol:string = undefined;
</script>


<select name={rol} bind:value style="color: { selected ? 'white': 'var(--color-text-muted)'} ;" on:input={(e) => {selected = true;}}>
    <option class="some" disabled selected value>Selecciona un departamento (opcional)</option>
    <option value="BENI">Beni</option>
    <option value="CHUQUISACA">Chuquisaca</option>
    <option value="COCHABAMBA">Cochabamba</option>
    <option value="LA PAZ">La Paz</option>
    <option value="ORURO">Oruro</option>
    <option value="PANDO">Pando</option>
    <option value="POTOSI">Potosi</option>
    <option value="SANTA CRUZ">Santa Cruz</option>
    <option value="TARIJA">Tarija</option>
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