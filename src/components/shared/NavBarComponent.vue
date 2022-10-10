<template>
  <nav class="nav-bar">

    <RoutingNavLinkComponent v-for="navLink in navLinks" 
      :key="navLink.name" 
      :link="navLink"
      class="nav-link"
    />
  
  </nav>
</template>

<script>
import RoutingNavLinkComponent from '@/components/shared/RoutingNavLinkComponent.vue';

export default {
	name: "NavBarComponent",
	props: {
		navLinks: Array, // Array of Objects
		/* Format
		[ { name: 'String', path: 'String' } ]
		*/

    /* Optional Props */
    isLowerCase: {
      type: Boolean,
      default: false,
      // Optional Prop in case lower case is needed for the nav-link elements (such as in the footer)
    }
	},

	components: { 
		RoutingNavLinkComponent 
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
	

</style>