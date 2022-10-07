<template>
  <div class="card">
    <img :src="cardImgSrc" :alt="cardInfo.name">
  </div>
</template>

<script>
export default {
  name: 'DisplayCardComponent',

  props: {
    cardInfo: Object,
    /* Format 
      { name: String, 
        categories: Array, 
        priceTagLow: Number, 
        priceTagHigh: Number, 
        imgName: String}
    */
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      directoryPath: 'shopImg/',
      imgFormat: '.jpg'
    }
  },

  computed: {
    cardImgSrc() {
      const { imgName } = this.cardInfo;

      return this.publicPath + this.directoryPath + imgName + this.imgFormat;
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  aspect-ratio: 1 / 1.25;
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;

    
  }
}
</style>