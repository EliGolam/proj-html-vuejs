<template>
  <section class="flex-center">

    <InfoArticleComponent 
			:info="ctaText"
			:CTABtnType="'light'"
			:emphasisedText="'onContent'"
      :globalColorSetting="'light'"
			class="info-card"
		/>

  </section>
</template>

<script>
import InfoArticleComponent from '@/components/shared/InfoArticleComponent.vue';

// Data
import { PAGE_TEXT_DATA } from '@/assets/classes/InfoCardModels';

export default {
  data() {
    return {
      ctaText: PAGE_TEXT_DATA.ctaSectionText,
    }
  },

  components: { 
    InfoArticleComponent 
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

section {
  // Background
  background-image: url('@/assets/images/call-to-action-bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  // Shape
  aspect-ratio: 22 / 6;
}
</style>