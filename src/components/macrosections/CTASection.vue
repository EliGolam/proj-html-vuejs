<template>
  <section>
    <h2 class="font-subtle-caps">Try our seasonal products</h2>
    <p class="font-emphasized">Order for pick-up or delivery to your home</p>
    <button type="button" class="btn-default light">Show Now</button>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

section {
  background-image: url('@/assets/images/call-to-action-bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  color: $clr-light;

  aspect-ratio: 21 / 7;
}
</style>