<template>
  <div class="flex-center">
    <ShoppingCartComponent />

    <div class="counter flex">
      <p>{{ itemsInCart }}</p>
    </div>
  </div>
</template>

<script>
import ShoppingCartComponent from './ShoppingCartComponent.vue';

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

</style>