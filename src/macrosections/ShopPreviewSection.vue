<template>
	<section class="container flex">
		<InfoArticleComponent 
			:info="ourProductsText"
			:CTABtnType="'dark'"
			class="info-card"
		/>

		<CardSlider 
      :cardsCollection="cards" 
      class="card-slider"
    />
	</section>
</template>

<script>
import InfoArticleComponent from '@/shared/InfoArticleComponent.vue';
import CardSlider from '@/shared/CardSlider_EmplaCarouselComponent.vue';

// DATA
import { PAGE_TEXT_DATA } from '@/assets/data/pageTextData.js';
import shopData from '@/assets/data/shopData.json';


export default {
	name: "ShopPreviewSection",

	data() {
		return {
			ourProductsText: PAGE_TEXT_DATA.shopPreviewText,
      cards: shopData,
		}
	},

	components: {
    InfoArticleComponent,
    CardSlider,
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

section {
  margin: $_size-8 auto;

  text-align: center;

  // Flex Container
  gap: $_size-8;

  .card-slider {
    width: 55%;
    margin-left: auto;
  }
}
</style>