<script lang="ts">
	import '$lib/styles/reset.scss';
	import '$lib/styles/root.scss';
	import '$lib/styles/global.css';
</script>

<div class="section">
	<slot />
</div>
<style lang="scss">
	body{
		font-family: 'Open sans';
	}
	.section {
		padding-bottom: 200px;
	}
</style>
