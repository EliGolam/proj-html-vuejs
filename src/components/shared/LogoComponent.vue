<template>
  <div class="logo-container"> 
    <img :src="logoSrc" alt="The Bakery"> 
  </div>
</template>

<script>
export default {
  name: 'LogoComponent',

  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  computed: {
		logoSrc() {
			return this.publicPath + 'logo.png';
		}
	},
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

$logo-size: 150px;
.logo-container {
  cursor: pointer;
  width: $logo-size;

  
  // Logo image
  img {
    // Animations
    transition: 
      transform $_speed-1 ease-in,
      opacity $_speed-1 ease;

    &:hover {
      transform: scale(1.05);
      opacity: .7
    }
  }
}
</style>