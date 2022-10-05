<template>
	<header class="wide-container">

		<div class="logo-container"> <img :src="logoSrc" alt="The Bakery"> </div>

		<NavBarComponent :navLinks="links" class="nav-bar" />

		<MyAccountComponent class="my-account" />

		<ShoppingCartComponent />	

	</header>
</template>

<script>
import MyAccountComponent from '@/components/MyAccountComponent.vue';
import ShoppingCartComponent from '@/components/ShoppingCartComponent.vue';
import NavBarComponent from '@/components//NavBarComponent.vue';

// Import Data
import { NAV_LINKS } from '@/assets/data/navLinksData'


export default {
	data() {
		return {
			links: NAV_LINKS.header,
			publicPath: process.env.BASE_URL,
		}
	},

	computed: {
		logoSrc() {
			return this.publicPath + 'logo.png';
		}
	},

  components: {
    MyAccountComponent,
    ShoppingCartComponent,
    NavBarComponent
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

header {
	// VARIABLES
	$logo-size: 150px;
	$default-padding: $_size-6;

	// Position for overlapping with Hero BG
	position: absolute;
		top: 0;
	
	width: 100%;

	// Flex Container
	display: flex;
	align-items: center;

	// Flex Items
	.logo-container {
		width: $logo-size;
	}

	.nav-bar {
		margin-left: auto; // Align Content to the right
	}

	.my-account {
		margin: 0 $default-padding;
	}
}
</style>