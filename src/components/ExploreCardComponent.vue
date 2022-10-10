<template>
  <article class="flex-center" :style="hoverBgImg">
    <InfoArticleComponent 
			:info="cardInfo"
			:withCTA="true"
			:CTABtnType="'dark'"
			:emphasisedText="'onContent'"
      :globalColorSetting="'light'"
			class="info-card"
		/>

    <img :src="imgSrc" :alt="cardInfo.name">
  </article>
</template>

<script>
import InfoArticleComponent from '@/components/shared/InfoArticleComponent.vue'


  export default {
    name: 'ExploreCardComponent',

    props: {
      cardInfo: Object,
      /* Format: {
        "title": String
        "content": String
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
      
      hoverBgImg() {
        const { bgImgHover } = this.cardInfo;
        const bgImgPath = this.publicPath + this.directoryPath + bgImgHover + this.imgFormat;
        return `background-image: url(${bgImgPath});`
      }
    },

    components: {
      InfoArticleComponent 
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

article {
  cursor: pointer;
  position: relative;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .info-card {
    position: absolute;
      top: 50%;
    transform: translateY(-50%);

    opacity: 0;
    transition: opacity $_speed-4 ease; 
  }

  img {
    opacity: 1;
    min-height: 100%;
    object-fit: cover;

    transition: opacity $_speed-4 ease;    
  }

  &:hover {
    img {
      opacity: 0;
    } 
    
    .info-card {
      opacity: 1;
    }
  }
}
</style>