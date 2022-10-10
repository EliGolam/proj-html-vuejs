<template>
  <form class="cta-newsletter flex" @submit.prevent>
    <label for="userEmail" class="font-emphasized">Subscribe to our Newsletter</label>

    <div class="form-input flex">
      <input type="email" name="userEmail" id="userEmail" placeholder="Enter email address*">
      <button type="submit" class="btn-default dark">Subscribe</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SubscribeNewsLetterForm'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

form {
  /* Flex Container */
  flex-direction: column;
  align-items: flex-end;

  // Size and Shape
  width: 50%;

  /* Flex Items */
  label {
    // Font
    font-size: $fs-3;
    font-weight: $fw-semi-bold;
  }

  .form-input {
    /* Flex Container */
    justify-content: flex-end;
    gap: $_size-4;

    // Size and Shape
    width: 100%;

    /* Flex items */
    input {
      flex-grow: 1;

      border-radius: .3em;
      border: 1px solid rgba($clr-gray, .3);

      padding: 0 $_size-1 ;

      font-weight: $fw-medium;
    }
  }
}
</style>