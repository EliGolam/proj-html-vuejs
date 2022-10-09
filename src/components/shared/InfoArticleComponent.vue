<template>
	<article>

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

		<CTAButtonComponent v-if="withCTA"
			:buttonLink="buttonLink"
			:buttonType="CTABtnType"
      class="cta-btn"
		/>
    
	</article>
</template>

<script>
import CTAButtonComponent from './CTAButtonComponent.vue';

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
        }
    },

    components: { 
        CTAButtonComponent 
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.defaultStyle {
  color: $clr-dark;
}

.info {
  margin: $_size-5 0;
}
</style>