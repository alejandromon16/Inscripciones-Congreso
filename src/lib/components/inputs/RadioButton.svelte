<script lang="ts">
	export let name: string;
	export let value: any;
	export let selected: typeof value;
	export let label: string = undefined;
	export let checked: boolean = false;
	export let helperText: string = undefined;
	export let error: string = undefined;
	export let disabled: boolean = false;

	let radioInputElement: HTMLInputElement;

	const handleWrapperClick = (event: MouseEvent) => {
		if (disabled) return;
		radioInputElement.checked = true;
		selected = value;
	};
</script>

<div class="radio-wrapper" on:click={handleWrapperClick}>
	<div class="input-wrapper" class:disabled>
		<input
			class="radio-input"
			type="radio"
			{name}
			{disabled}
			{value}
			{checked}
			bind:this={radioInputElement}
			bind:group={selected}
		/>
		{#if label} <label for={name}>{label}</label> {/if}
	</div>

	{#if helperText || error}
		<span class="bottom-text" class:error>{error || helperText}</span>
	{/if}
</div>

<style lang="scss">
	.radio-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-3xs);
	}

	.input-wrapper {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);

		.radio-input {
			width: 20px;
			height: 20px;
			padding: 0;
			margin: 0;
		}

		label {
			line-height: 1em;
		}
	}

	.bottom-text {
		&.error {
			color: var(--color-red);
		}
	}

	.disabled {
		label {
			opacity: 0.4;
		}
	}
</style>
