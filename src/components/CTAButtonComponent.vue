<template>
	<button type="button" :class="buttonType">{{ buttonText }}</button>
</template>

<script>
export default {
	name: 'CTAButtonComponent',
	props: {
		buttonText: String,
		buttonType: String, /* 'light' | 'dark' */
	}, 
}
</script>

<style lang="scss" scoped>

</style>