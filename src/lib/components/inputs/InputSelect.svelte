<script>
    let selected = false;
</script>

<select style="color: { selected ? 'white': 'var(--color-text-muted)'} ;" on:input={() => selected = true} name="select">
    <option class="some" disabled selected value>Rol en la Congregacion</option>
    <option value="value1">Pastor</option>
    <option value="value2">Lider</option>
    <option value="value3">Miembro</option>
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