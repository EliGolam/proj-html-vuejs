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

        emphasisedText: {
            type: String, /* 'onTitle' | 'onContent' */
            default: 'onTitle',
        },

        emphasisSize: String, /* 'big' */
    },

    computed: {
        titleEmphasis() {
            return this.emphasisedText === 'onTitle' ? 'emphasizedStyle' : ['defaultStyle', 'font-subtle-caps'];
        },

        contentEmphasis() {
            return this.emphasisedText === 'onContent' ? 'emphasizedStyle' : 'defaultStyle';
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
    font-size: $fs-3;
    font-weight: $fw-bold;
    font-family: $ff-secondary;

    &.big {
        font-size: $fs-1;
        font-weight: $fw-extra-bold;
    }
}

.defaultStyle {
    color: $clr-dark;
}

.cta-btn {
    margin: $_size-4 0;
}
</style>