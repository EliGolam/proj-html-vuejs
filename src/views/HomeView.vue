<template>
  <div class="home flow-section">
    
    <OurProductsSection id='our-products' class="container" />
    
    <CorporateWeddingsSection id="corporate-weddings" class="container" />

    <ShopPreviewSection class="container" />

    <WorkFlowSection class="container" /> 

    <LocationsSection class="container" />

    <SocialSection class="container" />

    <CTASection />
  </div>
</template>

<script>

import OurProductsSection from '@/components/macrosections/OurProductsSection.vue';
import CorporateWeddingsSection from '../components/macrosections/CorporateWeddingsSection.vue';
import ShopPreviewSection from '@/components/macrosections/ShopPreviewSection.vue';
import WorkFlowSection from '@/components/macrosections/WorkFlowSection.vue';
import LocationsSection from '@/components/macrosections/LocationsSection.vue';
import SocialSection from '@/components/macrosections/SocialSection.vue';
import CTASection from '../components/macrosections/CTASection.vue';


export default {
  name: "HomeView",

  components: {
    OurProductsSection,
    CorporateWeddingsSection,
    ShopPreviewSection,
    WorkFlowSection,
    LocationsSection,
    SocialSection,
    CTASection,
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