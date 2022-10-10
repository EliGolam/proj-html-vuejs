<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__container" v-for="endorsement in endorsements" :key="endorsement.person">
      <EndorsementCardComponent />
    </div>
  </div>
</template>

<script>
import workflowEndorsements from '@/assets/data/workflowEndorsements.json';
import EndorsementCardComponent from './EndorsementCardComponent.vue';

export default {
    name: "EndorsementSlider",
    data() {
        return {
            endorsements: workflowEndorsements,
        };
    },
    components: { 
      EndorsementCardComponent 
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

div {
  background-color: $clr-primary-light-purple;
}

.embla__container {
  .embla__slide {
    flex: 0 0 30%;
    max-width: 100%;
  
    margin-right: $_size-3;

    @media only screen and (min-width: $md-breakpoint) {
      flex: 0 0 50%;
    }
  }
}
</style>