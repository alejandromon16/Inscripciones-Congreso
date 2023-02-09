<script lang="ts">
	export let href: string = undefined;
	export let wrapText: boolean = false;
	export let radius: 'rounded' | 'base' = 'base';
	export let shadow: 'small' | 'base' | 'large' = 'base';
	export let size: 'base' | 'small' | 'large' | 'fill' | 'ghost' = 'base';
	export let color: 'yellow' | 'blue' = 'yellow';
	export let fontWeight: 'bold' | 'medium' = 'medium';
	export let style: ButtonStyle = 'filled';
	export let buttonType: 'submit' | 'button' | 'reset' = 'button';
	export let textColor: 'white' | 'black' = 'black';
	export let isDisabled: boolean = false;
	export let isSubmitting: boolean = false;
	export let fullWidth: boolean = false;

	const buttonStyles = `size--${size} radius--${radius} shadow--${shadow} style--${style} color--${color} weight--${fontWeight} text--${textColor}`;
	console.log(isSubmitting)
</script>

<div
	class="button-wrap {buttonStyles}"
	class:wrap={!wrapText}
	class:disabled={isDisabled}
	class:fullWidth
	on:click
	on:click={() => isSubmitting=true}
>
	{#if !href}
			<button disabled={isDisabled} type={buttonType}>
				{#if isSubmitting}
					<div class="loading">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
							<circle cx="50" cy="50" fill="none" stroke="#1b8492" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
							  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"/>
							</circle>
						</svg>
					</div>
				{:else}
					<slot/>
				{/if}
			</button>

	{:else}
		<a {href}> <slot /> </a>
	{/if}
</div>

<style lang="scss">
	.button-wrap {
		display: inline-flex;
		width: min-content;
		height: min-content;
		justify-content: center;
		align-items: center;
		transition: opacity 0.2s ease-in-out;
		cursor: pointer;
	}
	button,
	a {
		appearance: none;
		background-color: white;
		border: none;
		outline: none;
		padding: 0;
		margin: 0;
        border-radius: 20px;
		font-size: var(--text-button);
        font-weight: var(--fw-medium);
		-webkit-appearance: none;
		color: black;
		cursor: pointer;
		width: 100%;
		height: 100%;
		padding: calc(var(--space-2xs) + 2px) 40px;
	}

	.disabled {
		opacity: 0.5;
	}

	.loading{
		display: flex;
		justify-content: center;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		color: inherit;
		text-decoration: none;
	}

	/* TEXT WRAP */
	.wrap {
		white-space: nowrap;
	}

	/* TEXT COLOR */
	.text--white {
		color: var(--color-white);
	}
	.text-black {
		color: var(--color-black);
	}

	/* SIZE */
	.size--small a,
	.size--small button {
		padding: var(--space-3xs) calc(var(--space-xs) - 2px);
	}
	.size--large a,
	.size--large button {
		padding: calc(var(--space-2xs) + 3px) var(--space-md);
	}

	.size--ghost a,
	.size--ghost button {
		padding: 0;
	}

  .fullWidth {
		width: 100%;
	}

	/* FONT WEIGHT */
	.weight--bold {
		font-weight: var(--fw-bold);
	}
	.weight--mediun {
		font-weight: var(--fw-medium);
	}

	/* BORDRER RADIUS */
	.radius--rounded {
		border-radius: 50px;
	}
	.radius--base {
		border-radius: var(--br-button);
	}

	/* COLOR */
	.color--blue {
		background: linear-gradient(180deg, #474f74 0%, #16284c 100%);
		color: var(--color-white);

		&:hover {
			opacity: 0.9;
		}
	}

	/* STYLE */
	.style--ghost {
		background-color: transparent !important;
	}
</style>
