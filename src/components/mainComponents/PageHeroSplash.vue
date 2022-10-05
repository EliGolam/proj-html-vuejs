<template>
	<div class="hero">
		
	</div>
</template>

<script>
export default {
	name: 'PageHeroSplash'
}
</script>

<style lang="scss" scoped>
.hero {
	// HERO BG
	background-image: url('@/assets/images/hero-header-bakery.jpg');
	background-repeat: no-repeat;
	background-size: cover;

	// Parallax
	background-attachment: fixed;
	background-position: center;

	// Size
	width: 100%;
	min-height: 800px;
}
</style>