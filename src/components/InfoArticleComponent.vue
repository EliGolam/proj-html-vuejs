<template>
	<article>
		<component :is="heading">{{ info.title }}</component>
		<p>{{ info.content }}</p>

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
    },

    components: { 
			CTAButtonComponent 
		}
}
</script>

<style lang="scss" scoped>

</style>