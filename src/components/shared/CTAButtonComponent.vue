<template>
	<RoutingNavLinkComponent :link="buttonLink" class="button-link" :class="buttonType"/>
</template>

<script>
import RoutingNavLinkComponent from './RoutingNavLinkComponent.vue';
export default {
    name: "CTAButtonComponent",
    props: {
        buttonLink: Object,
        buttonType: String, /* 'light' | 'dark' */
    },
    components: { 
      RoutingNavLinkComponent 
    }
}
</script>

<style lang="scss" scoped>

</style>