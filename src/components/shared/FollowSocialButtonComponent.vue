<template>
  <a :href="social.link" class="btn-default dark flex centered">
    <font-awesome-icon :icon="['fab', social.icon]" class="icon" />
    <p>Follow Us</p>
  </a>
</template>

<script>
  export default {
    props: {
      social: Object, /* Format: { icon: String, link: String } */
    } 
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

a {
  width: fit-content;
  margin: 0 auto;

  gap: $_size-2;
}

.icon {
  font-size: $fs-4;
}
</style>