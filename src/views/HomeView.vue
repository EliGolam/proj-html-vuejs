<template>
  <div class="home">
    <OurProductsSection id='our-products'/>
    
    <CorporateWeddingsSection id="corporate-weddings" />

    <ShopPreviewSection />
  </div>
</template>

<script>

import OurProductsSection from '@/macrosections/OurProductsSection.vue';
import CorporateWeddingsSection from '../macrosections/CorporateWeddingsSection.vue';
import ShopPreviewSection from '@/macrosections/ShopPreviewSection.vue';

export default {
  name: "HomeView",

  components: {
    OurProductsSection,
    CorporateWeddingsSection,
    ShopPreviewSection
}
}
</script>


<style lang="scss" scoped>

</style>