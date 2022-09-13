<!-- TODO: Seperate out componenet making this more comp. more verstile -->
<script lang="ts">
	import TextInput from './TextInput.svelte';
	import type { ComponentProperties } from '$lib/types/helper.types';
	import Icon from '../global/Icon.svelte';
	import { CITIES } from '$lib/constants/cities.constant';
	import { clickOutside } from '$lib/actions/click-outside';
	import SearchRouteCardLocation from '$lib/views/index/search-card/SearchRouteCard-Location.svelte';

	type InputProps = ComponentProperties<TextInput>;

	export let name: string;
	export let inputProps: InputProps;
	export let isDropdownOpen: boolean = false;
	export let inputValue: string;
	export let mobile:boolean = false;

	let second:boolean = false;
	let contador:number = 0;

  const handleItemClick = (value: string) => {
    inputValue = value;
    isDropdownOpen = false;
  }

	$: filteredCities = inputValue?.length
		? CITIES.filter((city) => city.city.toLowerCase().includes(inputValue.toLowerCase()))
		: CITIES;
	$: popularCities = CITIES.filter((city) => city.popular);
</script>

<!-- DESC: Text Input With Searchable Dropdown -->

<div class="wrapper" use:clickOutside={() => (isDropdownOpen = false)}>
	<TextInput
		{...inputProps}
		{name}
		bind:value={inputValue}
		on:focus={() => {
			isDropdownOpen = true;
			if(contador == 1) second = true;
			contador += 1;
		}}
	/>

	{#if isDropdownOpen && second}
		<div class="dropdown">
			{#each filteredCities.length ? filteredCities : popularCities as city}
				<button class="dropdown__item" on:click={() => handleItemClick(city.city)}>
					<Icon icon="pin" size={20} />
					<span>{city.city}</span>
				</button>
			{/each}
		</div>
	{:else if isDropdownOpen}
		<SearchRouteCardLocation show={true} />
	{/if}
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.dropdown {
		background-color: white;
		width: 100%;
		bottom: 0;
		transform: translateY(100%);
		z-index: 10;
		position: absolute;
		display: flex;
		flex-direction: column;
		border-radius: var(--br-sm);
		max-height: 380px;
		overflow-y: auto;
		box-shadow: var(--shadow-100);

		button {
			appearance: none;
			border: none;
			outline: none;
			background-color: transparent;
			text-align: left;
			cursor: pointer;
		}

		&__item {
			display: flex;
			align-items: center;
			gap: var(--space-2xs);
			font-size: var(--text-md);
			padding: var(--space-xs) var(--space-xs);
			color: var(--color-body);
			transition: background-color 0.15s linear;
		}

		&__item:hover {
			background-color: #f1f2f6;
		}
	}
</style>
