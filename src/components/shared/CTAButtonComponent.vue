<template>
	<RoutingNavLinkComponent 
    :link="buttonLink" 
    class="btn-default" 
    :class="buttonType"
  />
</template>

<script>
import RoutingNavLinkComponent from './RoutingNavLinkComponent.vue';
export default {
    name: "CTAButtonComponent",
    props: {
        buttonLink: Object,

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

</style>