<template>
  <div class="home flow-section container">
    
    <OurProductsSection id='our-products' />
    
    <CorporateWeddingsSection id="corporate-weddings" />

    <ShopPreviewSection class="section" />

    <WorkFlowSection class="section" /> 

    <LocationsSection class="section" />

    <SocialSection />
  </div>
</template>

<script>

import OurProductsSection from '@/components/macrosections/OurProductsSection.vue';
import CorporateWeddingsSection from '../components/macrosections/CorporateWeddingsSection.vue';
import ShopPreviewSection from '@/components/macrosections/ShopPreviewSection.vue';
import WorkFlowSection from '@/components/macrosections/WorkFlowSection.vue';
import LocationsSection from '@/components/macrosections/LocationsSection.vue';
import SocialSection from '@/components/macrosections/SocialSection.vue';

export default {
  name: "HomeView",

  components: {
    OurProductsSection,
    CorporateWeddingsSection,
    ShopPreviewSection,
    WorkFlowSection,
    LocationsSection,
    SocialSection
}
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/variables';

.home {
  margin-top: $_size-8; 
  margin-bottom: $_size-8;
}
</style>