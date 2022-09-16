<script lang="ts">
	import { goto } from '$app/navigation';
	import CardForm from '$lib/components/CardForm.svelte';
	import Button from '$lib/components/global/Button.svelte';
	import InputSelect from '$lib/components/inputs/InputSelect.svelte';
	import TextInput from '$lib/components/inputs/TextInput.svelte';
	import { personData } from '$lib/schemas/personData';
	import { validate } from 'class-validator';
	import InscripcionTitle from './Inscripcion-title.svelte';
	import axios from 'axios';

	let data = new personData();

	const isFormCorrect = async () => {
		validate(data).then(errors => {
		// errors is an array of validation errors
		if (errors.length > 0) {
			console.log('validation failed. errors: ', errors);
		} else {
			goto(`/inscripciones/success/?name=${data.name}&lastname=${data.lastname}&id=${data.id}&email=${data.email}&phone=${data.phone}&church=${data.church}&rol=${data.rol}`)
		}
		});
	}
</script>

<CardForm>

	<div
		class="form"
	>
		<div class="container cards">
				<div class="title"><InscripcionTitle title="Formulario de Inscripcion"/></div>
				<div class="inputs">
					<TextInput
						name="name"
						inputType="text"
						placeholder="Nombre"
						bind:value={data.name}
					/>
					<TextInput
						name="lastname"
						placeholder="Apellido"
						bind:value={data.lastname}
					/>
					<TextInput
						name="id"
						placeholder="Cedula ID"
						inputType="number"
						bind:value={data.id}
					/>
					<TextInput
						name="email"
						placeholder="Email (opcional)"
						inputType="email"
						bind:value={data.email}
					/>
					<TextInput
						name="phone"
						placeholder="Numero de telefono"
						inputType="tel"
						bind:value={data.phone}
					/>
					<TextInput
						name="church"
						placeholder="Congregacion a la que asiste"
						bind:value={data.church}
					/>
					<InputSelect bind:value={data.rol} />
					<div class="button">
						<Button on:click={() => isFormCorrect()}/>
					</div>
				</div>
		</div>
	</div>
</CardForm>

<style lang="scss">
	.form {
		margin-top: 20px;
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

	@media only screen and (min-width: 768px) {
        .inputs {
            margin: 0px var(--space-md);
        }
    }
</style>
