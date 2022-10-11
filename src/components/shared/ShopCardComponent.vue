<template>
  <div class="shopping-item-card text-primary-dark">
    <figure class="flex-column">
      <div class="img-container">
        <img :src="cardImgSrc" :alt="cardInfo.name">

        <div class="shopping-item-hover flex">
          <button type="button">Select Options</button>
          /
          <button type="button">Quick View</button>
        </div>
      </div>

      <figcaption>
        <h3 class="font-emphasized card-name">{{ cardInfo.name }}</h3>
        <p class="price">{{ cardPrices }}</p>
      </figcaption>
    </figure>
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
 
  .price {
    font-size: $fs-4;
  }

  figure {
    gap: $_size-3;
  }
  .img-container {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1 / 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .shopping-item-hover {
    flex-direction: row;
    gap: $_size-3;
    position: absolute;
      top: 0;

    color: $clr-light;  
    font-size: $fs-4;
  
    button {
      cursor: pointer;
      text-transform: uppercase;
      background: none;

      // Animations
      transition: transform $_speed-2 ease;
      
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

</style>