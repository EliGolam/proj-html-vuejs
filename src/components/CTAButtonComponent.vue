<template>
	<RoutingNavLinkComponent :link="buttonLink" class="button" />
</template>

<script>
import RoutingNavLinkComponent from './RoutingNavLinkComponent.vue';
export default {
    name: "CTAButtonComponent",
    props: {
        buttonLink: Object,
        buttonType: String, /* 'light' | 'dark' */
    },
    components: { RoutingNavLinkComponent }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.button {
	// Variables
	$padding-x: $_size-4;
	$padding-y: $_size-1;
	$radius: .5em;
	$dark: $clr-primary-dark-purple;
	$light: $clr-light;

	// Font
	font-size: $fs-8;
	font-weight: $fw-bold;

	// Shape
	padding: $padding-y $padding-x;
	border-radius: $radius;

	// Transitions
	transition: 
		color 300ms ease,
		background-color 250ms ease;


	// BTN Colours	
	@mixin lightScheme {
		background-color: $light;
		color: $dark;
	}

	@mixin darkScheme {
		background-color: $dark;
		color: $light;
	}
	
	&.light {
		@include lightScheme();

		&:hover {
			@include darkScheme();
		}
	}

	&.dark {
		@include darkScheme();

		&:hover {
			@include lightScheme();
		}
	}
}
</style>