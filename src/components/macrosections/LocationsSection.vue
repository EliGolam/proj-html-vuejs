<template>
  <section>
    <h2 class="font-subtle-caps">Locations</h2>
    <p class="font-emphasized subtitle">Visit our Bakeries</p>

    <div class="card-container flex">
      <LocationCardComponent v-for="card in cards" :key="card.title"
        :cardInfo="card" 
        class="card"
      />
    </div>
  </section>
</template>

<script>
import locationsData from '@/assets/data/locationsData.json'
import LocationCardComponent from '@/components/LocationCardComponent.vue';

export default {
    data() {
        return {
            cards: locationsData.cards,
        };
    },
    components: { LocationCardComponent }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

section  {
  text-align: center;

  .subtitle {
    margin: $_size-5 auto;
  }
  .card {

    &:first-child {
      background-color: rgba($clr-md-atoll, .05);
    }
    &:nth-child(2) {
      background-color: rgba($clr-cube-chalky, .2);
    }
  }
}
</style>