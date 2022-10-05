<template>
	<header class="wide-container">
		<div class="logo-container"> <img :src="logoSrc" alt="The Bakery"> </div>

		<NavBarComponent :navLinks="links" class="nav-bar" />

		<MyAccountComponent />

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
header {
	$logo-size: 150px;

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
}
</style>