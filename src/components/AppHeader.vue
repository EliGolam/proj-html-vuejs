<template>
	<header class="wide-container">

		<LogoComponent />

		<RoutingNavComponent :navLinks="links" class="nav-bar" />

		<MyAccountComponent class="my-account" />

		<ShoppingCartComponent />	

	</header>
</template>

<script>
// Components
import MyAccountComponent from '@/components/MyAccountComponent.vue';
import ShoppingCartComponent from '@/components/ShoppingCartComponent.vue';
import RoutingNavComponent from '@/components/shared/RoutingNavComponent.vue';

// Import Data
import { headerLinks } from '@/assets/data/navLinksData.json';
import LogoComponent from './shared/LogoComponent.vue';


export default {
	data() {
		return {
			links: headerLinks,
		}
	},
  
  components: {
    MyAccountComponent,
    ShoppingCartComponent,
    RoutingNavComponent,
    LogoComponent
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

header {
	// VARIABLES
	$default-padding: $_size-2;
	
  // Size
	width: 100%;

	// Flex Container
	display: flex;
	align-items: center;

	// Flex Items
	.nav-bar {
		margin-left: auto; // Align Content to the right
	}

	.my-account {
		margin: 0 $default-padding;
	}
}
</style>