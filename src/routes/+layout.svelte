<script lang="ts">
	import '$lib/styles/reset.scss';
	import '$lib/styles/root.scss';
	import '$lib/styles/global.css';
</script>

<div class="section">
	<slot />
</div>
<style lang="scss">
	.section {
		padding-bottom: 200px;
	}
</style>
