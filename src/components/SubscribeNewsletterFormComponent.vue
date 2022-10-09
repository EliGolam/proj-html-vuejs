<template>
  <form class="cta-newsletter flex" @submit.prevent>
    <label for="userEmail" class="font-emphasized">Subscribe to our Newsletter</label>
    <div class="flex">
      <input type="email" name="userEmail" id="userEmail" placeholder="Enter email address*">
      <button type="submit" class="btn-default dark">Subscribe</button>
    </div>
  </form>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

form {
  flex-direction: column;
  align-items: flex-end;

  div {
    gap: $_size-4;
  }
}
</style>