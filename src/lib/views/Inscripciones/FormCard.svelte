<script lang="ts">
	export let title: string;
	export let subTitle: string;
	export let shadow: 'IMPORTANT' | 'REGULAR' = 'IMPORTANT';

	let number: number = 400;
	if (shadow == 'REGULAR') number = 0;
</script>

<div class="card" style="box-shadow: var(--shadow-{number});">
	<div>
		<h2>{title}</h2>
		<h4>{subTitle}</h4>
	</div>
	<div class="inputs">
		<slot />
	</div>
</div>

<style lang="scss">
	.card {
		width: 100%;
		display: flex;
		background: linear-gradient(173.35deg, rgba(255, 244, 244, 0.12) 1.23%, rgba(89, 84, 84, 0.06) 94.78%), rgba(0, 80, 75, 0.4);
		padding: var(--space-sm);
		border-radius: var(--br-md);
		flex-direction: column;
		gap: var(--space-md);

		.inputs{
			display: flex;
			flex-direction: column;
			padding: 20px 0px;
			row-gap: 40px;
		}

		h2 {
			color: var(--color-white);
			margin: 0 auto;
			text-align: center;
			font-weight: var(--fw-bold);
		}

		h4{
			font-size: 12px ;
			margin: 0 auto;
			font-weight: var(--fw-ligth);
			text-align: center;
			color: var(--color-text-muted);
		}
	}
</style>
