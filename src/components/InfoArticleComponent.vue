<template>
	<article>
		<component :is="heading">Title</component>
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
			Content: String, 
			CTAButton: String (optional), 
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