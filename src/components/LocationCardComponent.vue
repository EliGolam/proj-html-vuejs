<template>
  <div>
    <img :src="publicPath + cardInfo.img" alt="cardInfo.title">

    <article class="info-box">
      <h3 class="font-emphasized">{{ cardInfo.title }}</h3>
      <div class="flex info-container">
        <LocationsInfoComponent :title="'Call Us'" :info="cardInfo.number" />
        <LocationsInfoComponent :title="'Open All Week'" :info="hours" />
        <a class="btn-default light" href="#" type="button">View Map</a>
      </div>
    </article>
  </div>
</template>

<script>
import LocationsInfoComponent from '@/components/LocationsInfoComponent.vue';
  
export default {
    name: "LocationCardComponent",
    props: {
        cardInfo: Object,
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    },

    computed: {
      hours() {
        return this.cardInfo.openingHours + ' - ' + this.cardInfo.closingHours;
      }
    },
    components: { 
      LocationsInfoComponent 
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.info-box {
  padding: $_size-5;

  h3 {
    margin-bottom: $_size-3;
  }
}

.info-container {
  justify-content: space-between;
}
</style>