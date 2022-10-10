<template>
  <div class="cart-preview flex-center">
    <ShoppingCartComponent />

    <div class="counter flex-center round-container">
      <p class="text-primary-dark">{{ itemsInCart }}</p>
    </div>
  </div>
</template>

<script>
import ShoppingCartComponent from '@/components/ShoppingCartComponent.vue';

export default {
  name: 'CartWithCounter',
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
  // Flex Container
  gap: $_size-1;

  // Flex Items
  .counter {
    // Size
    width: $_size-4;

    // Aesthetic
    background-color: $clr-primary-light;
  }
}
</style>