<template>
  <section class="grid">
    <div v-for="index in numderOfCards" :key="index"
      class="card"
      :style="`grid-area = card${index}`"
    >
      <img :src="getPath(index)" alt="">
    </div>

    <div class="info-box flex-center">
      <div>
        <InfoArticleComponent 
          :info="infoText"
          :withCTA="false"
          :emphasisedText="'onContent'"
        />

        <FollowSocialButtonComponent :social="social" />
      </div>
    </div>
    
  </section>
</template>

<script>
import InfoArticleComponent from '../shared/InfoArticleComponent.vue';
import FollowSocialButtonComponent from '../shared/FollowSocialButtonComponent.vue';

import { PAGE_TEXT_DATA } from '@/assets/classes/InfoCardModels';



export default {
    data() {
        return {
            numderOfCards: 6,
            publicPath: process.env.BASE_URL,
            imgPath: {
                path: "img/",
                prefix: "social-",
                imgFormat: ".jpg",
            },
            infoText: PAGE_TEXT_DATA.socialSectionText,
            social: {
              icon: 'instagram',
              link: '#'
            }
        };
    },
    methods: {
        getPath(index) {
            const { path, prefix, imgFormat } = this.imgPath;
            return this.publicPath + path + prefix + index + imgFormat;
        }
    },
    components: { 
      InfoArticleComponent, 
      FollowSocialButtonComponent 
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.grid {
  display: grid;
  grid-template-areas: 
  "card1 info info card2"
  "card3 card4 card5 card6";

  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: $_size-4;
}

.card {
  width: 100%;
  aspect-ratio: 1 / 1;

  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
}

.info-box {
  grid-area: info;

  background-color: $clr-primary-light-purple;
  text-align: center;
}
</style>