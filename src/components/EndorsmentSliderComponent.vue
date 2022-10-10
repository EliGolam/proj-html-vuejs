<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__container">
      <div class="embla__slide flex-center" 
        v-for="endorsement in endorsements" 
        :key="endorsement.person"
      >
        <div class="info-card"
          @mouseover="pauseAutoplay()"
          @mouseleave="resumeAutoplay()"
        >
          <InfoArticleComponent 
            :info="endorsement"
            :withCTA="false"
            :emphasisedText="'onContent'"
          />
          <p class="font-subtle-caps"> {{ endorsement.person }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import workflowEndorsements from '@/assets/data/workflowEndorsements.json';
import emblaCarouselVue from 'embla-carousel-vue'
import InfoArticleComponent from '@/components/shared/InfoArticleComponent.vue';

export default {
    name: "EndorsementSlider",
    data() {
        return {
            endorsements: workflowEndorsements,
            autoplayIntevalID: undefined,
            autoplayDelay: 15 * 1000, // 10 sec
            counter: 0,
        };
    },

    setup() {
      const [emblaNode, emblaApi] = emblaCarouselVue({
          loop: true,
          skipSnaps: true,
      });
      return { emblaNode, emblaApi };
    },

    methods: {
      nextSlide() {
        clearInterval(this.autoplayIntevalID);
        console.log("Test Scroll", this.counter++);
        this.emblaApi.scrollNext();
        this.autoplay();
      },

      autoplay() {
        clearInterval(this.autoplayIntevalID);
        this.autoplayIntevalID = setInterval(this.nextSlide, this.autoplayDelay);
      },

      pauseAutoplay() {
        clearInterval(this.autoplayIntevalID);
      },

      resumeAutoplay() {
        clearInterval(this.autoplayIntevalID);
        this.autoplay();
      }
    },

    mounted() {
      this.autoplay();
    },
    
    components: { 
      InfoArticleComponent
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

div {
  background-color: $clr-primary-light;
}

.embla__container {

  min-height: 100%;
  .embla__slide {
    flex: 0 0 100%;
    max-width: 100%;
    min-height: 100%;
  
    .info-card {
      max-width: 60ch;
      padding: $_size-2;
    }
  }
}
</style>