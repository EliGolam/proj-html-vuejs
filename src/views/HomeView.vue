<template>
  <div class="home">
    <div class="top-hero-section">
      <PageHeader class="header" />

      <HomeHeroSplash />
    </div>
  </div>
</template>

<script>
import HomeHeroSplash from '@/components/mainComponents/HomeHeroSplash.vue';
import PageHeader from '@/components/mainComponents/PageHeader.vue';

export default {
  name: "HomeView",

  components: {
    HomeHeroSplash,
    PageHeader
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