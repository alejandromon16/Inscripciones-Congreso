<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/global/Button.svelte';
	import InputSelect from '$lib/components/inputs/InputSelect.svelte';
	import InputSelectCountry from '$lib/components/inputs/inputSelectCountry.svelte';
	import RadioButton from '$lib/components/inputs/RadioButton.svelte';
	import TextInput from '$lib/components/inputs/TextInput.svelte';
	import { contactSchema, type ContactSchema } from '$lib/schemas/contact.schema';
	import { checkoutStore } from '$lib/stores/checkout.store';
	import Hero from '$lib/views/hero/Hero.svelte';
	import CheckoutFormCard from '$lib/views/Inscripciones/FormCard.svelte';
	import { validator } from '@felte/validator-zod';
	import axios from 'axios';
	import { createForm } from 'felte';
	import { fade } from 'svelte/transition';


	const { form, errors, data, isValid, isSubmitting } = createForm<ContactSchema>({
		onSubmit: async () => {
			const urlParams = new URLSearchParams();
			Object.entries($data).forEach(([key, value]) => urlParams.set(key, value));
			const res = await axios.get(`/api/register?${urlParams.toString()}`);
			try{
				if(res){
					goto(`/success?name=${res.data}`);
				}
			}catch(e){
				console.log(e);
			}
		},
		onError: () => {},
		onSuccess: () => {},
		extend: validator({ schema: contactSchema })
	});
</script>


<div>
	<Hero 
		heroImgSrc="https://res.cloudinary.com/dvklesox1/image/upload/v1663599249/background_cselww.png" 
		descrition="Venid a las aguas.Es tiempo de entrar en la ola del Espiritu y vivir un poderoso Avivamiento en nuestra nacion. Ya te inscribiste? Registrate aqui."
	/>
</div>
<form use:form >
	<div class="container cards">
			<CheckoutFormCard title="Formulario de Inscripcion" subTitle="*la Inscripcion es COMPLETAMENTE GRATUITA." shadow="IMPORTANT">
			<TextInput
				name="name"
				placeholder="Nombre"
				size="full"
				error={$errors.name}
				value={$data.name}
			/>
			<TextInput
				name="lastname"
				placeholder="Apellido"
				size="full"
				error={$errors.lastname}
				value={$data.lastname}
			/>
			<TextInput
				name="id"
				placeholder="Cedula de ID"
				size="full"
				error={$errors.id}
				value={$data.id}
			/>
			<TextInput
				name="email"
				placeholder="Email"
				size="full"
				error={$errors.email}
				value={$data.email}
			/>
			<TextInput
				name="phone"
				placeholder="Numero de telefono"
				size="full"
				error={$errors.phone}
				value={$data.phone}
			/>
			<TextInput
				name="church"
				placeholder="Congregacion en la que asiste"
				size="full"
				error={$errors.church}
				value={$data.church}
			/>
			<InputSelect bind:value={$data.rol}/>
			<InputSelectCountry bind:value={$data.department}/>
			<TextInput
				name="country"
				placeholder="Pais (Si no eres de Bolivia)"
				size="full"
				error={$errors.country}
				value={$data.country}
			/>

		</CheckoutFormCard>

	</div>
	<div class="button">
		<Button color="white" fullWidth buttonType="submit" isDisabled={!$isValid} isSubmitting={$isSubmitting}>
			Enviar
		</Button>
	</div>

</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		width: 100%;

		.cards {
			display: flex;
			flex-direction: column;
			row-gap: var(--space-md);
		}
	}


	header {
		z-index: 10;
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
	}

	footer {
		margin-bottom: var(--space-2xl);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		justify-content: center;

		.terms {
			text-align: center;
		}
	}

	.foot-notes {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
		text-align: center;
		max-width: 40ch;
		margin: 0 auto;
	}
	.button {
		display: flex;
		padding: 10px 20px;
	}

	@media (min-width: 1200px){
		.button{
			padding: 30px 20%;
		}
	}
</style>
