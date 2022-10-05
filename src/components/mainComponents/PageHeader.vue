<template>
	<header>
		<NavBarComponent :navLinks="links"/>
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

</style>