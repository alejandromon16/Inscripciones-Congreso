<script context="module" lang="ts">
	export const ICONS = [
		'arrow',
		'person',
		'replace',
		'calendar',
		'pin',
		'back',
		'search',
		'close'
	] as const;
	export type IconType = typeof ICONS[number];
</script>

<script lang="ts">
	export let icon: IconType;
	export let color: string = 'black';
	export let size: number = 16;
	export let isClickable: boolean = false;

	$: sizeValue = `100%`;
</script>

<div class="icon-wrap" style="width: {size}px; height: {size}px" class:isClickable on:click>
	{#if icon === 'arrow'}
		<svg
			width={sizeValue}
			height={sizeValue}
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<rect x="15" width="15" height="15" rx="7.5" transform="rotate(90 15 0)" fill="red" />
			<defs>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use xlink:href="#image0_2_40" transform="scale(0.00195312)" />
				</pattern>
			</defs>
		</svg>
	{/if}

	{#if icon == 'person'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			role="img"
			width={sizeValue}
			height={sizeValue}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
			><g fill="none" stroke={color} stroke-width="2"
				><circle cx="12" cy="7" r="5" /><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"
				/></g
			></svg
		>
	{/if}

	{#if icon === 'replace'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={sizeValue}
			height={sizeValue}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 16 16"
			><path
				fill="none"
				stroke={color}
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="m7.75 5.75l-3-3l-3 3m3 7.5V2.75m9.5 7.5l-3 3l-3-3m3-7.5v10.5"
			/></svg
		>
	{/if}

	{#if icon === 'calendar'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={sizeValue}
			height={sizeValue}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
			><g fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				><rect width="20" height="18" x="2" y="4" rx="4" /><path d="M8 2v4m8-4v4M2 10h20" /></g
			></svg
		>
	{/if}

	{#if icon === 'pin'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={sizeValue}
			height={sizeValue}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 32 32"
			><path
				fill={color}
				d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z"
			/><circle cx="16" cy="13" r="4" fill="none" /></svg
		>
	{/if}

	{#if icon === 'back'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={sizeValue}
			height={sizeValue}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
			><path
				fill={color}
				d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64Z"
			/></svg
		>
	{/if}

	{#if icon === 'search'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={sizeValue}
			height={sizeValue}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 1024 1024"
			><path
				fill={color}
				d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
			/></svg
		>
	{/if}

	{#if icon === 'close'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={sizeValue}
			height={sizeValue}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 1024 1024"
			><path
				fill={color}
				d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"
			/></svg
		>
	{/if}
</div>

<style lang="scss">
	.icon-wrap {
		position: relative;
		z-index: 50;
		display: inline-flex;

		&.isClickable {
			cursor: pointer;
		}
	}
</style>
