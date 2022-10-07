<template>
	<section class="container flex">
		<InfoArticleComponent 
			:info="ourProductsText"
			:withCTA="true"
			:CTABtnType="'dark'"
			:emphasisedText="'onContent'"
			class="info-card"
		/>

		<CardSlider 
      :cardsCollection="cards" 
      :typeOfCards="'display'" 
      class="card-slider"
    />
	</section>
</template>

<script>
import InfoArticleComponent from '@/components/shared/InfoArticleComponent.vue';
import CardSlider from '@/components/shared/CardSlider_EmplaCarouselComponent.vue';

// DATA
import { PAGE_TEXT_DATA } from '@/assets/data/pageTextData.js';
import shopData from '@/assets/data/shopData.json';


export default {
	name: "OurProductsSection",

	data() {
		return {
			ourProductsText: PAGE_TEXT_DATA.ourProductsText,
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

  // Flex Container
  gap: $_size-8;

  .card-slider {
    width: 55%;
    margin-left: auto;
  }
}
</style>