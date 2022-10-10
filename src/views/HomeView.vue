<template>
  <div class="home">
    
    <div class="flow-section">
      <OurProductsSection id='our-products' class="container" />
      
      <CorporateWeddingsSection id="corporate-weddings" class="container" />

      <ShopPreviewSection id="shop-preview" class="container" />

      <WorkFlowSection id="workflow" class="container" /> 

      <LocationsSection id="locations" class="container" />

      <SocialSection id="social" class="container" />

      <CTASection id="cta" />
    </div>
  
    <OfferAlertOverlayComponent />
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
import OfferAlertOverlayComponent from '@/components/shared/OfferAlertOverlayComponent.vue';


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
    OfferAlertOverlayComponent
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