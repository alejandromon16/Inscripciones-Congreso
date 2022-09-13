<script lang="ts">
	export let heroImgSrc: string;
	export let descrition: string;
</script>

<div class="hero">
	<img class="hero__background" src={heroImgSrc} alt="hero" />
  <div class="overlay" />
</div>
<div class="hero-logo">
	<img class="logo" src="logo.png" alt="">
	<span>{descrition}</span>
</div>

<style lang="scss">
	.hero {
        z-index: -10;
		top: 0;
		left: 0;
		width: 100%;
		position: absolute;

		&__background {
			position: fixed;
			width: 100%;
			height: 100vh;
			object-position: center;
			object-fit: cover;
		}

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
	}

	.hero-logo{
		display: flex;
		padding: 0px var(--space-3xl);
		flex-direction: column;
		justify-content: center;
		margin: 30px 0px;

		.logo{
			margin-bottom: 40px;
		}
	}

	span {
		text-align: center;
		color: var(--color-white)
	}
</style>