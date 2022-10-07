<template>
  <article>
    <h4>{{ title }}</h4>
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

</style>