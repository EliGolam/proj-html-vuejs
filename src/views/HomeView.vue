<template>
  <div class="home">
    <div class="top-hero-section">
      <PageHeader class="header" />
      <HomeHeroSplash />
    </div>

    <OurProductsSection id='our-products'/>

    <Slider_EmplaCarouselComponent />
  </div>
</template>

<script>
import HomeHeroSplash from '@/components/mainComponents/HomeHeroSplash.vue';
import PageHeader from '@/components/mainComponents/PageHeader.vue';
import OurProductsSection from '@/components/sectionComponents/OurProductsSection.vue';
import Slider_EmplaCarouselComponent from '@/components/Slider_EmplaCarouselComponent.vue';

export default {
  name: "HomeView",

  components: {
    HomeHeroSplash,
    PageHeader,
    OurProductsSection,
    Slider_EmplaCarouselComponent
}
}
</script>


<style lang="scss" scoped>
.top-hero-section {
  position: relative;

  .header {
    position: fixed;
  }
}
</style>