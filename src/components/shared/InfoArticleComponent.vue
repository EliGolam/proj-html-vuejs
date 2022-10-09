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
				
        // Optional Props
        titleTag: { // Title Tag invece di heading
            type: String,
            default: "h2",
        },

        withCTA: {
            type: Boolean,
            default: true,
        },

        CTABtnType: {
            type: String,
            default: "dark",
        },

        emphasisedText: {
            type: String, /* 'onTitle' | 'onContent' */
            default: 'onTitle',
        },

        emphasisSize: String, /* 'big' */
    },

    computed: {
        titleEmphasis() {
            return this.emphasisedText === 'onTitle' ? 'font-emphasized' : ['defaultStyle', 'font-subtle-caps'];
        },

        contentEmphasis() {
            return this.emphasisedText === 'onContent' ? 'font-emphasized' : 'defaultStyle';
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