<template>
  <article :style="hoverImg">
    <img :src="imgSrc" :alt="cardInfo.name">
  </article>
</template>

<script>
  export default {
    name: 'ExploreCardComponent',

    props: {
      cardInfo: Object,
      /* Format: {
        "name": String
        "info": String
        "cta" : String
        "ctaPath": String
        "bgImg": String
        "bgImgHover": String
      }, */
    },

    data() {
      return {
        publicPath: process.env.BASE_URL,
        directoryPath: 'img/',
        imgFormat: '.jpg' 
      }
    },

    computed: {
      imgSrc() {
        const { bgImg } = this.cardInfo;
        return this.publicPath + this.directoryPath + bgImg + this.imgFormat;
      },
      
      hoverImg() {
        const { bgImgHover } = this.cardInfo;
        const bgImgPath = this.publicPath + this.directoryPath + bgImgHover + this.imgFormat;
        return `background-image: url(${bgImgPath});`
      }
    }
  }
</script>

<style lang="scss" scoped>
article {
  cursor: pointer;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  

  img {
    opacity: 1;
    min-height: 100%;
    object-fit: cover;

    transition: opacity 300ms ease;

    &:hover {
      opacity: 0;
    }
  }
}
</style>