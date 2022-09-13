<script lang="ts">
	import { goto } from '$app/navigation';
	import CardForm from '$lib/components/CardForm.svelte';
	import Button from '$lib/components/global/Button.svelte';
	import TextInput from '$lib/components/inputs/TextInput.svelte';
	import { contactSchema, type ContactSchema } from '$lib/schemas/contact.schema';
	import { validator } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import InscripcionTitle from './Inscripcion-title.svelte';

	const MAX_PERCENTAGE = 0;

	const { form, errors, data, isValid } = createForm<ContactSchema>({
		onSubmit: () => {},
		onError: () => {},
		onSuccess: () => {
			goto('/inscripciones/success');
		},
		extend: validator({ schema: contactSchema })
	});

</script>

<form use:form>
	<div class="container cards">
		<CardForm>
			<div class="title"><InscripcionTitle title="Formulario de Inscripcion"/></div>
			<div class="inputs">
				<TextInput
					name="full_name"
					placeholder="Full name"
					size="full"
					error={$errors.name}
					value={$data.name}
				/>
				<TextInput
					name="email"
					placeholder="Email"
					size="full"
					error={$errors.lastname}
					value={$data.lastname}
				/>
				<TextInput
					name="nit"
					placeholder="NIT / CLI"
					size="full"
					error={$errors.email}
					value={$data.email}
				/>
				<TextInput
					name="phone"
					placeholder="Phone number"
					size="full"
					error={$errors.phone}
					value={$data.phone}
				/>
				<div class="button">
					<Button />
				</div>
			</div>
		</CardForm>

	</div>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		width: 100%;

		.title {
			display: flex;
			justify-content: center;
			padding: 20px 0px;
		}

		.inputs {
			display: grid;
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
