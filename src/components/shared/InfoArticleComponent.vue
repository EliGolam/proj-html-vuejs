<template>
	<article :class="globalColor" class="flow">

    <!-- Optional ability to customize the header tag for this article for accessibility purposes -->
		<component 
      :is="titleTag" 
      :class="[titleEmphasis, emphasisSize]"
      >
      {{ info.title }}
    </component>

		<p class="info"
      :class="[contentEmphasis, emphasisSize]"
      >{{ info.content }}
    </p>

		<CTARouterButtonComponent v-if="withCTA"
			:buttonLink="buttonLink"
			:buttonType="CTABtnType"
      class="cta-btn"
		/>
    
	</article>
</template>

<script>
import CTARouterButtonComponent from './CTARouterButtonComponent.vue';

export default {
    name: "InfoArticleComponent",
    props: {
        info: Object,
        /* {
            title: String,
            content: String,
            cta: String (optional),
            ctaPath: String (optional),
        } */
				
        /* Optional Props */
        // Assign a custom HTML tag for title
        titleTag: { 
            type: String,
            default: "h2",
        },

        // Remove CTA if not wanted
        withCTA: {
            type: Boolean,
            default: true,
        },

        // CTA button style
        CTABtnType: {
            type: String,
            default: "dark",
        },

        // Choose which tag to put emphasis on
        emphasisedText: {
            type: String, /* 'onTitle' | 'onContent' | 'none' */
            default: 'onTitle',
        },

        // Add a "bigger" emphasised text if needed
        emphasisSize: String, /* 'big' */

        globalColorSetting: String, /* 'light', 'dark', 'purple' */
    },

    computed: {
        titleEmphasis() {
            if (this.emphasisedText === 'onTitle') return 'font-emphasized';
            else return ['defaultStyle', 'font-subtle-caps'];
        },

        contentEmphasis() {
          if (this.emphasisedText === 'onContent') return 'font-emphasized';
          else return 'defaultStyle';
        },

        buttonLink() {
            return {
                name: this.info.cta,
                path: this.info.ctaPath,
            } 
        },

        globalColor() {
          return 'global-' + this.globalColorSetting;
        }
    },

    components: { 
        CTARouterButtonComponent 
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.defaultStyle {
  color: $clr-dark;
}

.global-light {
  &> * {
    color: $clr-light;
  }
}
</style>