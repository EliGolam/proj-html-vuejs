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

		<button class="test" @click="next()">CLICK ME MATE</button>
  </div>
</template>

<script>
import emblaCarouselVue from 'embla-carousel-vue'

export default {
	name: 'EmblaCarouselComponent',

	data() {
		return {
			
		}
	},

	setup() {
		const [emblaNode, emblaApi] = emblaCarouselVue({ loop: true })
		return { emblaNode, emblaApi }
	},

	methods: {
		next() {
			console.log("Test Scroll");
			this.emblaApi.scrollNext();
		}
	}
}
</script>

<style lang="scss" scoped>
.embla {
	overflow: hidden;
}
.embla__container {
	display: flex;
}
.embla__slide {
	flex: 0 0 30%;
	max-width: 100%;
}
</style>