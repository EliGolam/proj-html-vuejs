<template>
	<section class="container flex">
		<InfoArticleComponent 
			:info="ourProductsText"
			:withCTA="true"
			:CTABtnType="'dark'"
			:emphasisedText="'onContent'"
			class="info-card"
		/>
	</section>
</template>

<script>
import InfoArticleComponent from '../InfoArticleComponent.vue';

// DATA
import { PAGE_TEXT_DATA } from '@/assets/data/pageTextData.js';

export default {
	name: "OurProductsSection",

	data() {
		return {
			ourProductsText: PAGE_TEXT_DATA.ourProductsText,
		}
	},

	components: { 
		InfoArticleComponent 
	}
}
</script>

<style lang="scss" scoped>

</style>