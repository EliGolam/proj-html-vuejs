<template>
  <div class="embla" ref="emblaNode">

    <div class="embla__container" :class="cardContainerClass">
      <div class="embla__slide" v-for="card in cardsCollection" :key="card.name" >
        <DisplayCardComponent v-if="typeOfCards === 'display'"
          :cardInfo="card" 
        />
        <DisplayCardComponent v-else
          :cardInfo="card"
          :cardShape="'square'" 
        />
      </div>
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
import DisplayCardComponent from './DisplayCardComponent.vue';

export default {
    name: "CardSlider",
    props: {
      cardsCollection: Array,
      typeOfCards: {
          type: String,
          default: "default",
      }
    },
    setup() {
      const [emblaNode, emblaApi] = emblaCarouselVue({
          loop: true,
      });
      return { emblaNode, emblaApi };
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
    },

    computed: {
      cardContainerClass() {
        return [this.typeOfCards];
      }
    },

    components: { 
      DisplayCardComponent 
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

  &.default {
    .embla__slide {
      flex: 0 0 30%;
      max-width: 100%;
    
      margin-right: $_size-3;

      @media only screen and (min-width: $md-breakpoint) {
        flex: 0 0 50%;
      }
    }
  }

  &.display {
    .embla__slide {
      flex: 0 0 50%;
      max-width: 100%;
    
      margin-right: $_size-3;
    }
  }
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
</style>