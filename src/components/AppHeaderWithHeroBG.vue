<template>
  <div class="top-hero-section">
    <AppHeader class="header" />
    <HomeHeroSplash />
  </div>
</template>

<script>
import HomeHeroSplash from './HomeHeroSplash.vue';
import AppHeader from './AppHeader.vue';


export default {
  components: { 
    HomeHeroSplash, 
    AppHeader 
  }
}
</script>

<style lang="scss" scoped>
  .top-hero-section {
    position: relative;
  
    .header {
      position: absolute;
        top: 0;
    }
  }
</style>