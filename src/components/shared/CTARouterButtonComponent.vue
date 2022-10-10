<template>
  <div>
    <RoutingNavLinkComponent 
      :link="buttonLink" 
      class="btn-default" 
      :class="buttonType"
    />
  </div>
</template>

<script>
import RoutingNavLinkComponent from './RoutingNavLinkComponent.vue';

export default {
    name: "CTARouterButtonComponent",
    props: {
        buttonLink: Object, /* Format: { name: String, path: String } */

        buttonType: { /* 'light' | 'dark' */
          type: String,
          default: 'dark',
        } 
    },
    components: { 
      RoutingNavLinkComponent 
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

div {
  margin-top: $_size-8;
}

</style>