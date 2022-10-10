<template>
	<div class="hero-bg flex-column">
    <AppHeader />

		<div class="hero-bg__info container flex-column">
			<p class="font-subtle-caps">{{ heroInfo }}</p>

			<InfoArticleComponent 
				:info="heroText" 
				:withCTA="true"
				:CTABtnType="'light'"
				:emphasisSize="'big'"
				:emphasisedText="'onTitle'"
				class="info-card" 
			/>
		</div>
	</div>
</template>

<script>
import InfoArticleComponent from '@/components/shared/InfoArticleComponent.vue';
import AppHeader from './AppHeader.vue';

import { PAGE_TEXT_DATA } from '@/assets/classes/InfoCardModels';
import textData from '@/assets/data/textData.json';


export default {
	name: 'HomeHeroSplash',

	data() {
    return {
      heroText: PAGE_TEXT_DATA.heroText,
			heroInfo: textData.heroInfo,
    }
  },

	components: {
    InfoArticleComponent,
    AppHeader
}
}
</script>

<style lang="scss" scoped>
// HERO BG
.hero-bg {
	// HERO BG
	background-image: url('@/assets/images/hero-header-bakery.jpg');
	background-repeat: no-repeat;
	background-size: cover;

	// Parallax
	background-attachment: fixed;
	background-position: center;

	// Size
	width: 100%;
	min-height: 800px;

	// Flex Container
	align-items: center;

  .hero-bg__info {
    min-height: 100%;
    justify-content: center;
  }

	// Flex Items
	.container {
		flex-grow: 1;
	}
}
</style>