<template>
  <section class="flow">
    <h2 class="title font-subtle-caps">Corporate &amp; Weddings</h2>
    <p class="font-emphasized">Baking Special Moments</p>

    <div class="card-container flex">
      <ExploreCardComponent v-for="card in cards" :key="card.name"
        :cardInfo="card" 
      />
    </div>
  </section>
</template>

<script>
import ExploreCardComponent from '@/components/ExploreCardComponent.vue';

import corporateWeddingsData from '@/assets/data/corporateWeddingsData.json';

export default {
  name: "CorporateWeddingsSection",

  data() {
    return {
      cards: corporateWeddingsData,
    }
  },

  components: { 
    ExploreCardComponent 
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

section {
  text-align: center;
}

.card-container {
  $gap: $_size-5;

  padding: $gap 0;
  gap: $gap;
}
</style>