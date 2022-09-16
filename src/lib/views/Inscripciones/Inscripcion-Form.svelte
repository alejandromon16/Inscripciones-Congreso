<script lang="ts">
	import { goto } from '$app/navigation';
	import CardForm from '$lib/components/CardForm.svelte';
	import Button from '$lib/components/global/Button.svelte';
	import InputSelect from '$lib/components/inputs/InputSelect.svelte';
	import RadioButton from '$lib/components/inputs/RadioButton.svelte';
	import TextInput from '$lib/components/inputs/TextInput.svelte';
	import { contactSchema, type ContactSchema } from '$lib/schemas/contact.schema';
	import { validator } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import InscripcionTitle from './Inscripcion-title.svelte';

	const isFormCorrect = () => {
		goto('/inscripciones/success');
	}
</script>

<div class="form">
	<div class="container cards">
		<CardForm>
			<div class="title"><InscripcionTitle title="Formulario de Inscripcion"/></div>
			<div class="inputs">
				<TextInput
					name="Nombre"
					placeholder="Nombre"
					size="full"
				/>
				<TextInput
					name="Apellido"
					placeholder="Apellido"
				/>
				<TextInput
					name="Cedula ID"
					placeholder="Cedula ID"
					inputType="number"
				/>
				<TextInput
					name="Email (opcional)"
					placeholder="Email (opcional)"
					inputType="email"
				/>
				<TextInput
					name="Numero de telefono"
					placeholder="Numero de telefono"
					inputType="number"
				/>
				<TextInput
					name="Congregacion a la que asiste"
					placeholder="Congregacion a la que asiste"
				/>
				<InputSelect />
				<div class="button">
					<Button on:click={() => isFormCorrect()}/>
				</div>
			</div>
		</CardForm>

	</div>
</div>

<style lang="scss">
	.form {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: max-content;

		.title {
			display: flex;
			justify-content: center;
			padding: 35px 0px;
		}

		.inputs {
			display: flex;
			flex-direction: column;
			row-gap: 30px;
			padding: 0px 35px;
		}
	}

	.button {
		display: flex;
		justify-content: end;
		padding: 20px 0px;
	}
</style>
