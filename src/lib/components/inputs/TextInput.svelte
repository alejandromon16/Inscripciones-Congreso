<script lang="ts" context="module">
	import type { IconType } from '$lib/components/global/Icon.svelte';
	import { createEventDispatcher, onMount } from 'svelte';

	interface IconProps {
		icon: IconType;
		size: number;
		color: string;
		location: 'left' | 'right';
		onClick: (event: MouseEvent) => void;
	}

	type IconPropType = Partial<IconProps>[] | Partial<IconProps> | IconType;
</script>

<script lang="ts">
	import Icon from '../global/Icon.svelte';

	export let inputType: 'text' | 'number' | 'password' | 'search' | 'email' | 'date' = 'text';
	export let size: 'base' | 'full' = 'full';
	export let name: string;
	export let value: string = '';
	export let placeholder: string = undefined;
	export let error: string | string[] = '';
	export let helperMessage: string = undefined;
	export let maxTextLength: number = undefined;
	export let borderColor: string = 'var(--color-white)';
	export let textColor: string = 'var(--color-white)';

	export let isRequired: boolean = false;
	export let isInputFocused: boolean = false;
	export let isReadonly: boolean = false;
	export let isDisabled: boolean = false;

	/* The sapce between the icon & text */
	export let iconTextGap: number = 10;
	export let icons: IconPropType = undefined;

	export let focus:boolean = false;

	let leftIconsClientWidth: number;
	let inputElement: HTMLInputElement;
	let hasReachedMaxTextLength: boolean = false;
	
	const dispatch = createEventDispatcher();
	
	const handleInputFocus = () => {
		isInputFocused = true;
    	dispatch('focus');
	};

	const handleInputBlur = () => {
		isInputFocused = false;
    	dispatch('blur');
	};

	/* Using input event to value insted of two way binding to avoid creating
     multiple if statements for input type */
	const handleInputEvent = (event: Event) => {
		const target = event.target as HTMLInputElement;
		value = target.value;
	};

	/**
	 * Gets the icon prop and filles the default values no matter which type it is.
	 * @param {IconPropType} partialIcons an `IconProp` or array of `IconProp` or a string of IconType
	 */
	const getIconProps = (partialIcons: IconPropType): IconProps[] => {
		if (!icons) return;
		const DEFAULT_ICON_PROPS: IconProps = {
			color: 'black',
			icon: 'person',
			location: 'left',
			size: 20,
			onClick: () => {}
		};

		if (Array.isArray(partialIcons)) {
			return partialIcons.map((icon) => ({ ...DEFAULT_ICON_PROPS, ...icon }));
		}

		if (typeof partialIcons === 'string') {
			return [{ ...DEFAULT_ICON_PROPS, icon: partialIcons as IconType }];
		}

		return [{ ...DEFAULT_ICON_PROPS, ...partialIcons }];
	};

	const addInputPaddingForLeftIcons = () => {
		if (!leftIconsClientWidth) return;
		inputElement.style.paddingLeft = `${leftIconsClientWidth + iconTextGap}px`;
	};

	let leftIcons = getIconProps(icons)?.filter((icon) => icon.location === 'left') || [];
	let rightIcons = getIconProps(icons)?.filter((icon) => icon.location === 'right') || [];

	const inputClasses = `${leftIcons?.length ? 'has-icon--left' : ''}`;

	$: if (value.length > maxTextLength) {
		hasReachedMaxTextLength = true;
		value = value.substring(0, value.length - 1);
		error = `Text cannot be longer than ${maxTextLength} characters`;
	} else if (hasReachedMaxTextLength) {
		hasReachedMaxTextLength = false;
		error = undefined;
	}

	onMount(() => {
		addInputPaddingForLeftIcons();
	});
	
</script>

<div class="input-container size--{size}" style="--iconTextGap: {iconTextGap}px;" class:error>
	<div class="input-wrap" class:focused={isInputFocused} style:border-color={borderColor}>
		<input
			{name}
			{value}
			type={inputType}
			pattern={inputType == "number" ? '[0-9]' : ''}
			inputmode={inputType == "number" ? 'numeric' : ''}
			class={inputClasses}
			readonly={isReadonly}
			disabled={isDisabled}
			required={isRequired}
			style:color={textColor}
			bind:this={inputElement}
			on:input={handleInputEvent}
			on:focus={handleInputFocus}
			on:blur={handleInputBlur}
		/>

		<!-- ICONS LEFT -->
		<div class="input-inner input-inner--left" class:has-icons={leftIcons?.length}>
			<div class="icons icons--left" bind:clientWidth={leftIconsClientWidth}>
				{#each leftIcons as leftIcon}
					<Icon
						color={leftIcon.color}
						size={leftIcon.size}
						icon={leftIcon.icon}
						on:click={leftIcon.onClick}
					/>
				{/each}
			</div>

			{#if placeholder}
				<label for={name} class:entered={value || isInputFocused}>{placeholder}</label>
			{/if}
		</div>

		<!-- ICONS RIGHT (CLICKABLE) -->
		<div class="input-inner input-inner--right">
			{#each rightIcons as rightIcon}
				<div class="icons icons--right">
					<Icon
						color={rightIcon.color}
						size={rightIcon.size}
						icon={rightIcon.icon}
						on:click={rightIcon.onClick}
					/>
				</div>
			{/each}
		</div>
	</div>

	<div class="bottom-text">
		{#if helperMessage && !error} <span class="helper-message">{helperMessage}</span> {/if}
		{#if error}
			<span class="error-message">
				{error?.[0] || error}
			</span>
		{/if}

		{#if maxTextLength && inputType === 'text'}
			<span class="text-count" class:text-count--eror={hasReachedMaxTextLength}>
				{value.length}/{maxTextLength}
			</span>
		{/if}
	</div>
</div>

<style lang="scss">
	.input-container {
		width: 100%;
		max-width: 200px;
    padding-top: var(--space-2xs);

		&.size--full {
			max-width: none;
		}
	}

	.input-wrap {
		background-color: transparent;
		position: relative;
		display: inline-flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		border-bottom: 1px solid var(--color-black);
		padding: var(--space-3xs) 0;
		line-height: 1em;
		transition: border 0.15s linear;

		&.focused {
			border-bottom-color: var(--color-primary);
		}
	}

	.input-inner {
		display: flex;
		height: 100%;
		position: absolute;
		align-items: center;

		&.has-icons {
			gap: var(--iconTextGap);
		}

		&--left {
			pointer-events: none;
		}

		&--right {
			right: 0;
		}
	}

	.icons {
		display: flex;
		gap: var(--space-2xs);
	}

	label {
		display: flex;
		align-items: center;
		height: 100%;
		line-height: 1em;
		transition: transform 0.2s ease-in-out;
		color: var(--color-text-muted);

		/* Entered & focused effect */
		&.entered {
			transform: translateY(-70%);
		}
	}

	input {
		appearance: none;
		-webkit-appearance: none;
		border: none;
		outline: none;
		background-color: transparent;

		&.has-icon--left {
			padding-left: calc(var(--space-2xs) + 2px);
		}

		&.has-icon--right {
			padding-right: calc(var(--space-2xs) + 2px);
		}
	}

	/* ERROR CLASSES */
	.error .input-wrap {
		border-bottom-color: var(--color-red);
	}

	/* BOTTOM TEXT CLASSES (HELPER / ERROR) */
	.bottom-text {
		display: flex;
		align-items: center;
		padding: var(--space-4xs) 0;
		width: 100%;

		.helper-message {
			color: var(--color-text-muted);
		}

		.error-message {
			color: var(--color-red);
		}

		.text-count {
			width: auto;
			margin-left: auto;
		}

		.text-count--eror {
			color: var(--color-red);
		}
	}

	input:-webkit-autofill,
	input:-webkit-autofill:focus {
		transition: background-color 600000s 0s, color 600000s 0s;
	}
	input[data-autocompleted] {
		background-color: transparent !important;
	}
</style>
