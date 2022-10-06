<template>
  <div class="home">
    <div class="top-hero-section">
      <PageHeader class="header" />
      <HomeHeroSplash />
    </div>

    <OurProductsSection />
  </div>
</template>

<script>
import HomeHeroSplash from '@/components/mainComponents/HomeHeroSplash.vue';
import PageHeader from '@/components/mainComponents/PageHeader.vue';
import OurProductsSection from '@/components/sectionComponents/OurProductsSection.vue';

export default {
  name: "HomeView",

  components: {
    HomeHeroSplash,
    PageHeader,
    OurProductsSection
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