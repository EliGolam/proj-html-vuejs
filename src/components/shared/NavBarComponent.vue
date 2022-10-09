<template>
  <nav>

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
	},

	components: { 
		RoutingNavLinkComponent 
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
	
nav {
	// Local Variables
	$c-gap: $_size-2;
	
	// Flex Container
	display: flex;
	column-gap: $c-gap;
}
</style>