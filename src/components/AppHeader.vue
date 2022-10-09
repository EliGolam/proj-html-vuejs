<template>
	<header class="wide-container">

		<LogoComponent />

		<NavBarComponent :navLinks="links" class="nav-bar" />

		<MyAccountComponent class="my-account" />

		<ShoppingCartComponent />	

	</header>
</template>

<script>
// Components
import MyAccountComponent from '@/components/MyAccountComponent.vue';
import ShoppingCartComponent from '@/components/ShoppingCartComponent.vue';
import NavBarComponent from '@/components/shared/NavBarComponent.vue';

// Import Data
import { NAV_LINKS } from '@/assets/data/navLinksData';
import LogoComponent from './shared/LogoComponent.vue';


export default {
	data() {
		return {
			links: NAV_LINKS.header,
		}
	},
  
  components: {
    MyAccountComponent,
    ShoppingCartComponent,
    NavBarComponent,
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