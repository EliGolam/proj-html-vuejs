<template>
  <section class="grid">
    <h2 class="visually-hidden">Our Workflow</h2>

    <WorkFlowCardComponent v-for="card in cards" :key="card.id" 
      :card="card"
      class="card"
      :style="`grid-area: card${card.id}`"
    />

    <EndorsmentSliderComponent />
  </section>
</template>

<script>
import WorkFlowCardComponent from '@/components/WorkFlowCardComponent.vue';
import EndorsmentSliderComponent from '../EndorsmentSliderComponent.vue';

import workFlowSectionText from '@/assets/data/workFlowSectionText.json';

export default {
    name: "WorkFlowSection",

    data() {
      return {
        cards: workFlowSectionText,
      }
    },

    components: {
    WorkFlowCardComponent,
    EndorsmentSliderComponent
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

$r-gap: $_size-6;
$c-gap: $_size-5;

.grid {
  display: grid;
  grid-template-areas: 
  "card1 card1"
  "card2 info"
  "card3 card3";

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 500px);

  column-gap: $c-gap;
  row-gap: $r-gap;
}
</style>