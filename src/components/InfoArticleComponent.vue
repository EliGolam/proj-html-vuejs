<template>
	<article>
		<component 
            :is="heading" 
            :class="[titleEmphasis, emphasisSize]"
            >
            {{ info.title }}
        </component>

		<p 
            :class="[contentEmphasis, emphasisSize]"
            >{{ info.content }}
        </p>

		<CTAButtonComponent v-if="withCTA"
			:buttonText="info.cta"
			:buttonType="CTABtnType"
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
        } */
				
        // Optional Props
        heading: {
            type: String,
            default: "h2",
        },

        withCTA: {
            type: Boolean,
            default: false,
        },

        CTABtnType: {
            type: String,
            default: "dark",
        },

        emphasizedText: {
            type: String, /* 'onTitle' | 'onContent' */
            default: 'onTitle',
        },

        emphasisSize: String, /* 'big' */
    },

    computed: {
        titleEmphasis() {
            return this.emphasizedText === 'onTitle' ? 'emphasizedStyle' : ['defaultStyle', 'font-subtle-caps'];
        },

        contentEmphasis() {
            return this.emphasizedText === 'onContent' ? 'emphasizedStyle' : 'defaultStyle';
        }
    },

    components: { 
        CTAButtonComponent 
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.emphasizedStyle {
    color: $clr-primary-dark-purple;
    font-size: $fs-2;
    font-family: $ff-secondary;

    &.big {
        font-size: $fs-1;
    }
}

.defaultStyle {
    color: $clr-dark;
}
</style>