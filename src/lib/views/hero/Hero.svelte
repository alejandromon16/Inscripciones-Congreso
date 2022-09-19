<script lang="ts">
	export let heroImgSrc: string;
	export let descrition: string = '';
</script>

<div class="hero">
	<img class="hero__background" src="{heroImgSrc}" alt="hero" />
  <div class="overlay" />
</div>
<div class="hero-logo">
	<div>
		<img width="800px" class="logo" src="/images/logo.png" alt="">
	</div>
	<span class="date">7 Marzo 2023</span>
	<span class="place">Fexpocruz-salon Guarayos</span>
	<span class="country">Santa cruz, Bolivia</span>
	<span class="description">{descrition}</span>
</div>

<style lang="scss">
	.hero {
        z-index: -1;
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
		flex-direction: column;
		justify-content: center;
		margin: 30px 0px;

		.logo{
			padding-right: 15px;
		}

		.date{
			font-size: 21px;
			color:#FED130;
			font-weight: var(--fw-bold);
		}

		.place{
			color:#FED130;
			font-size: 16px;
			font-weight: var(--fw-medium);
		}
		.country{
			font-size: 14px;
			font-weight: var(--fw-regular);
			margin-bottom: 20px;
		}
		.description{
			font-weight: var(--fw-ligth);
		}
	}


	span {
		padding: 0px var(--space-3xl);
		text-align: center;
		color: var(--color-white)
	}


	@media only screen and (min-width: 768px) {
        .hero-logo {
            margin: 0px var(--space-2xl);
            padding: 0px var(--space-md);
        }
    }

	@media only screen and (min-width: 992px) {
		.hero-logo {
			padding: 0px var(--space-5xl);
		}
		img{
			width: 100%;
			margin-right: 10px;
		}
  	}

	@media only screen and (min-width: 1200px) {
		.hero-logo{
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 5px 0px;
		}
		.logo{
			width:700px;
		}

		span{
			font-size: 20px;
			font-weight: 300;
			padding: 0 500px;
		}
  	}

</style>