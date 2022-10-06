<template>
  <div class="embla" ref="emblaNode">

    <div class="embla__container">
      <div class="embla__slide"><img src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></div>
      <div class="embla__slide"><img src="https://images.pexels.com/photos/1535288/pexels-photo-1535288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></div>
      <div class="embla__slide"><img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></div>
			<div class="embla__slide"><img src="https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></div>
			<div class="embla__slide"><img src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></div>
      <div class="embla__slide"><img src="https://images.pexels.com/photos/1535288/pexels-photo-1535288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></div>
      <div class="embla__slide"><img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></div>
			<div class="embla__slide"><img src="https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></div>
    </div>


		<button type="button"
			class="slider-nav-btn slider-prev slider-horizontal"
			@click="prevSlide()"
			>
			<font-awesome-icon icon="fa-solid fa-angle-left" />
		</button>
		<button type="button"
			class="slider-nav-btn slider-next slider-horizontal"
			@click="nextSlide()"
			>
			<font-awesome-icon icon="fa-solid fa-angle-right" />
		</button>
		
  </div>
</template>

<script>
import emblaCarouselVue from 'embla-carousel-vue'

export default {
	name: 'CardSlider',

	props: {
		cardsCollection: Array,

		typeOfCard: {
			type: String, /* 'large' | 'default' */
			default: 'default',
		}
	},

	setup() {
		const [emblaNode, emblaApi] = emblaCarouselVue({ 
			loop: true, 
		})
		return { emblaNode, emblaApi }
	},

	methods: {
		nextSlide() {
			console.log("Test Scroll");
			this.emblaApi.scrollNext();
		},
		prevSlide() {
			console.log("Test Scroll");
			this.emblaApi.scrollPrev();
		},
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.embla {
	overflow: hidden;
	position: relative;
}
.embla__container {
	display: flex;
}
.embla__slide {
	flex: 0 0 30%;
	max-width: 100%;

	margin-right: $_size-3;
}

// Slider Navigation Buttons
.slider-nav-btn {
	$padding: $_size-1;

	position: absolute;

	color: $clr-light;

	background: $center-fade-gradient-purple;
	opacity: .65;

	// Transitions
	transition: opacity 200ms ease;

	&:hover {
		opacity: 1;
	}

	&.slider-horizontal{
		top: 50%;
		transform: translateY(-50%);
		height: 90%;
		padding: 0 $padding;
		
		&.slider-next {
			right: 0;
		}

		&.slider-prev {
			left: 0;
		}
	}
		
}

// DEBUG
img {
	aspect-ratio: 1 / 1;
	object-fit: cover;
}

</style>