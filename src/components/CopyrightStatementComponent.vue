<template>
  <p>{{ copyrightText }}</p>
</template>

<script>
export default {
  name: 'CopyrightStatement',

  props: {
    copyrightText: String,
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

p {
  font-size: $fs-9;
}
</style>