<template>
  <div class="cart-preview flex-center">
    <ShoppingCartComponent />

    <div class="counter flex-center round-container">
      <p>{{ itemsInCart }}</p>
    </div>
  </div>
</template>

<script>
import ShoppingCartComponent from '@/components/ShoppingCartComponent.vue';

export default {
  name: 'ShoppingCartWithCounter',
  props: {
    itemsInCart: {
      type: Number,
      default: 0,
    }
  },

  components: { 
    ShoppingCartComponent 
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.cart-preview {
  gap: $_size-1;
}
</style>