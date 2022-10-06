<template>
	<router-link :to="link.path">{{ link.name }}</router-link> 
</template>

<script>
export default {
	name: 'RoutingNavLinkComponent',

	props: {
		link: Object, /* Format { name: 'String', path: 'String' } */
	}
}
</script>

<style lang="scss" scoped>

</style>