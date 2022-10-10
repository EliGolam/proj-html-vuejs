<template>
  <div class="shopping-item-card" :style="bgImg">
    <!-- <img :src="cardImgSrc" :alt="cardInfo.name"> -->

    <div class="shopping-item-hover flex">
      <h3 class="font-emphasized">{{ cardInfo.name }}</h3>
      <p>{{ cardCategories }}</p>
      <p class="prices">{{ cardPrices }}</p>
    </div>
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
      const url = this.publicPath + this.directoryPath + imgName + this.imgFormat;

      return url;
    },

    cardCategories() {
      return this.cardInfo.categories.join(', ');
    },

    cardPrices() {
      const { priceTagLow, priceTagHigh } = this.cardInfo;
      const lowPrice = Number(priceTagLow).toFixed(2);
      const highPrice = Number(priceTagHigh).toFixed(2)

      return `$${lowPrice} - $${highPrice}`;
    }, 
    
    bgImg() {
      return `background-image: url("${this.cardImgSrc}")`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.shopping-item-card {
  aspect-ratio: 1 / 1.25;
  cursor: pointer;

  .prices {
    font-size: $fs-2;
    margin-top: $_size-1;
  }
}

</style>