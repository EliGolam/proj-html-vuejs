<template>
	<header>
		<MyAccountComponent />
		<ShoppingCartComponent />
	</header>
</template>

<script>
import MyAccountComponent from '../MyAccountComponent.vue';
import ShoppingCartComponent from '../ShoppingCartComponent.vue';


export default {
	data() {
		return {
			
		}
	},

  components: {
			MyAccountComponent,
			ShoppingCartComponent
	}
}
</script>

<style lang="scss" scoped>

</style>