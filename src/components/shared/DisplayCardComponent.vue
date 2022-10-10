<template>
  <div class="card" :class="cardShape">
    <img :src="cardImgSrc" :alt="cardInfo.name">

    <div class="hover-info flex">
      <h3 class="font-emphasized">{{ cardInfo.name }}</h3>
      <p>{{ cardCategories }}</p>
      <p>{{ cardPrices }}</p>
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
    },

    cardCategories() {
      return this.cardInfo.categories.join(', ');
    },

    cardPrices() {
      const { priceTagLow, priceTagHigh } = this.cardInfo;

      return `$${priceTagLow} $${priceTagHigh}`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.card {
  position: relative;
  cursor: pointer;

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

  .hover-info {
    position: absolute;
      top: 0;

    height: 100%;
    width: 100%;
    background-color: rgba($clr-cube-cod-gray, .3);

    align-items: center;
    justify-content: center;
    flex-direction: column;

    opacity: 0;

    &:hover {
      opacity: 1;
    }

    * {
      color: $clr-light;
    }
  }
}
</style>