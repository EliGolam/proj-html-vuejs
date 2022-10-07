<template>
  <div class="home">
    <OurProductsSection id='our-products'/>
    
    <CorporateWeddingsSection id="corporate-weddings" />
  </div>
</template>

<script>

import OurProductsSection from '@/macrosections/OurProductsSection.vue';
import CorporateWeddingsSection from '../macrosections/CorporateWeddingsSection.vue';

export default {
  name: "HomeView",

  components: {
    OurProductsSection,
    CorporateWeddingsSection
}
}
</script>


<style lang="scss" scoped>

</style>