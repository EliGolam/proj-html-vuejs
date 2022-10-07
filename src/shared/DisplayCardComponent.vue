<template>
  <div class="card" :class="cardShape">
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
    cardShape: {
      type: String,
      default: 'display', /* 'display' | 'square' */
    }
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
  &.display {
    aspect-ratio: 1 / 1.25;
  }

  &.square {
    aspect-ratio: 1 / 1;
  }
  
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
  }
}
</style>