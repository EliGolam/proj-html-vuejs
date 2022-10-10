<template>
  <article>
    <h4 class="font-subtle-caps title">{{ title }}</h4>
    <p>{{ info }}</p>
  </article>
</template>

<script>
  export default {
    name: "LocationsInfoComponent",

    props: {
      title: String,
      info: String,
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.title {
  margin-bottom: $_size-1;
}
</style>