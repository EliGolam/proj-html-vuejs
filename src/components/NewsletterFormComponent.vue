<template>
  <form class="flex-column" @submit.prevent>
    <label for="userEmail" class="font-emphasized">{{ form.label }}</label>

    <div class="form-input flex">
      <input type="email" name="userEmail" id="userEmail" :placeholder="form.placeholder">
      <button type="submit" class="btn-default dark">{{ form.ctaButtonText }}</button>
    </div>
  </form>
</template>

<script>
import footerTextData from '@/assets/data/footerTextData.json'

export default {
  name: 'NewsLetterForm',

  data() {
    return {
      form: footerTextData.newsletter,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

form {
  /* Flex Container */
  align-items: flex-end;
  row-gap: $_size-6;

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
    gap: $_size-3;

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