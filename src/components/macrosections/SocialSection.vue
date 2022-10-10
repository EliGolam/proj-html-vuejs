<template>
  <section class="grid">
    <div v-for="index in numderOfCards" :key="index"
      class="card"
      :style="`grid-area = card${index}`"
    >
      <img :src="getPath(index)" alt="">
    </div>

    <div class="info-box">
      <p>Title bla bla</p>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        numderOfCards: 6,
        publicPath: process.env.BASE_URL,
        imgPath: {
          path: 'img/',
          prefix: 'social-',
          imgFormat: '.jpg'
        }
      }
    },

    methods: {
      getPath(index) {
        const { path, prefix, imgFormat } = this.imgPath;
        return this.publicPath + path + prefix + index + imgFormat;
      }
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
  gap: $_size-2;
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
}
</style>