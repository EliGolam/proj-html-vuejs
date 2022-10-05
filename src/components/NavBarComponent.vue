<template>
	<div>
		<nav>
      <RoutingNavLinkComponent v-for="navLink in navLinks" 
				:key="navLink.name" 
				:link="navLink"
				class="nav-link"
			/>
			<!-- <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> -->
    </nav>
	</div>
</template>

<script>
import RoutingNavLinkComponent from './RoutingNavLinkComponent.vue';

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
	$c-gap: $_size-6;
	
	// Flex Container
	display: flex;
	column-gap: $c-gap;

	
}
</style>