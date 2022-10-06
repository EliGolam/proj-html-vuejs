<template>
	<div class="hero-bg flex">
		<div class="container">
			<p class="font-subtle-caps">{{ heroInfo }}</p>
			
			<InfoArticleComponent 
				:info="heroText" 
				:withCTA="true"
				:CTABtnType="'light'"
				:emphasisSize="'big'"
				:emphasizedText="'onTitle'"
				class="info-card" 
			/>
		</div>
	</div>
</template>

<script>
import InfoArticleComponent from '@/components/InfoArticleComponent.vue';

import { PAGE_TEXT_DATA } from '@/assets/data/pageTextData';

export default {
	name: 'HomeHeroSplash',

	data() {
    return {
      heroText: PAGE_TEXT_DATA.heroText,
			heroInfo: PAGE_TEXT_DATA.heroInfo,
    }
  },

	components: {
		InfoArticleComponent,
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

	// Flex Items
	.container {
		flex-grow: 1;
	}
}
</style>