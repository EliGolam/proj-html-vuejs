<template>
  <div class="home">
    <OurProductsSection id='our-products'/>
    
    <CorporateWeddingsSection id="corporate-weddings" />

    <ShopPreviewSection />

    <WorkFlowSection /> 
  </div>
</template>

<script>

import OurProductsSection from '@/components/macrosections/OurProductsSection.vue';
import CorporateWeddingsSection from '../components/macrosections/CorporateWeddingsSection.vue';
import ShopPreviewSection from '@/components/macrosections/ShopPreviewSection.vue';
import WorkFlowSection from '@/components/macrosections/WorkFlowSection.vue';

export default {
  name: "HomeView",

  components: {
    OurProductsSection,
    CorporateWeddingsSection,
    ShopPreviewSection,
    WorkFlowSection
}
}
</script>


<style lang="scss" scoped>

</style>