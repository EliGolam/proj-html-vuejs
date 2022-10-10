<template>
  <section class="flex">
    <WorkFlowCardComponent v-for="card in cards" :key="card.id" 
      :card="card"
      class="card"
      :class="{ centerCard : card.id === 2}"
    />

    <WorkFlowInfoCardComponent class="card centerCard" />
  </section>
</template>

<script>
import WorkFlowCardComponent from '@/components/WorkFlowCardComponent.vue';
import WorkFlowInfoCardComponent from '@/components/WorkFlowInfoCardComponent.vue';

import workFlowSectionText from '@/assets/data/workFlowSectionText.json'

export default {
    name: "WorkFlowSection",

    data() {
      return {
        cards: workFlowSectionText,
      }
    },

    components: { 
      WorkFlowCardComponent,
      WorkFlowInfoCardComponent 
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

$r-gap: $_size-6;
$c-gap: $_size-5;

section {
  flex-wrap: wrap;
  row-gap: $r-gap;
  column-gap: $c-gap;
}

.card {
  flex-basis: 100%;
  aspect-ratio: 21 / 9;

  @media only screen and (min-width: $md-breakpoint) {
    &:nth-child(1) {
      order: 1;
    }

    &.centerCard {
      order: 2;
      aspect-ratio: 1 / 1;
      flex-basis: calc(100% / 2 - $c-gap / 2);
    }

    &:nth-child(3) {
      order: 3;
    }
  }
}
</style>