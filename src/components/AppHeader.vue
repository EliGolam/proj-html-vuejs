<template>
	<header class="wide-container flex-center">

		<LogoComponent />

    <nav class="nav-bar">
      <RoutingNavComponent :navLinks="links" />

      <MyAccountComponent class="my-account" />

      <ShoppingCartComponent />
    </nav>	

	</header>
</template>

<script>
// Components
import MyAccountComponent from '@/components/MyAccountComponent.vue';
import ShoppingCartComponent from '@/components/ShoppingCartComponent.vue';
import RoutingNavComponent from '@/components/shared/RoutingNavComponent.vue';

// Import Data
import navLinksData from '@/assets/data/navLinksData.json';
import LogoComponent from './shared/LogoComponent.vue';


export default {
	data() {
		return {
			links: navLinksData.headerLinks,
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
  // Size
	width: 100%;

	// Flex Items
	.nav-bar {
		margin-left: auto; // Align Content to the right
	}

	.my-account {
		margin: 0 $_size-1;
	}
}
</style>