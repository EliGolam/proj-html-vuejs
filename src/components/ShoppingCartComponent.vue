<template>
  <font-awesome-icon :icon="['fas', 'cart-shopping']" class="icon" />
</template>

<script>
  export default {
    name: 'ShoppingCartComponent'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.icon {
  color: $clr-primary-dark-purple;
}
</style>