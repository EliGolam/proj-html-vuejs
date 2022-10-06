<template>
	<section class="container flex">
		<InfoArticleComponent 
			:info="ourProductsText"
			:withCTA="true"
			:CTABtnType="'dark'"
			:emphasisedText="'onContent'"
			class="info-card"
		/>

		<CardSlider />
	</section>
</template>

<script>
import InfoArticleComponent from '@/shared/InfoArticleComponent.vue';
import CardSlider from '@/shared/CardSlider_EmplaCarouselComponent.vue';

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
    InfoArticleComponent,
    CardSlider,
}
}
</script>

<style lang="scss" scoped>

</style>