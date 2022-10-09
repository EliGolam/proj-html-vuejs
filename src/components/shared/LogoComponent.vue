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
  width: $logo-size;
}
</style>