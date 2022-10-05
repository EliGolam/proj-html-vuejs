<template>
	<article>
		<component :is="heading">{{ info.title }}</component>
		<p>{{ info.content }}</p>

		
	</article>
</template>

<script>
export default {
	name: 'InfoArticleComponent',

	props: {
		options: String, /* 'accentTitle', 'accentContent' */

		info: Object, 
		/* { 
			title: String, 
			content: String, 
			cta: String (optional), 
		} */

		// Optional Props
		heading: {
			type: String,
			default: 'h2',
		},

		withCTA: {
			type: Boolean,
			default: false,
		},

		CTABtnType: {
			type: String,
			default: 'dark',
		},
	},
}
</script>

<style lang="scss" scoped>

</style>