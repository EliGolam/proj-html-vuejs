<template>
  <section class="flex container">
    <WorkFlowCardComponent v-for="card in cards" :key="card.id" 
      :card="card"
      class="card"
    />
  </section>
</template>

<script>
import WorkFlowCardComponent from './WorkFlowCardComponent.vue';

import workFlowSectionText from '@/assets/data/workFlowSectionText.json'

export default {
    name: "WorkFlowSection",

    data() {
      return {
        cards: workFlowSectionText,
      }
    },

    components: { 
      WorkFlowCardComponent 
    }
}
</script>

<style lang="scss" scoped>
section {
  flex-wrap: wrap;
}

.card {
  flex-basis: 100%;
  aspect-ratio: 21 / 9;
}
</style>