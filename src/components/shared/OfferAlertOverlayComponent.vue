<template>
  <div class="alert-box flex">
    <div class="alert-item square-container flex-center">
      <font-awesome-icon icon="fa-solid fa-bread-slice" class="icon" />
      <p class="text">Demos</p>
    </div>


    <div v-for="(alert, index) in alerts" :key="index"
      class="alert-item square-container flex-center"
    >
        <p class="price">{{alert.price}}</p>
        <p class="text">{{alert.text}}</p>
    </div>
  </div>
</template>

<script>
import offerAlertsData from '@/assets/data/offerAlertsData.json'

  export default {
    data() {
      return {
        alerts: offerAlertsData,
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.alert-box {
  flex-direction: column;
  gap: $_size-2;
}
.alert-item {
  cursor: pointer;

  width: $_size-9;
  border-radius: .6em;
  background-color: $clr-light;

  flex-direction: column;

  box-shadow: 2px 2px 10px rgba($clr-primary-dark, .4);

  .icon {
    font-size: $fs-2;
  }

  .price {
    font-size: $fs-2;
    font-weight: $fw-bold;
    font-family: $ff-secondary;
    text-align: center;
    color: $clr-cube-jap-laurel;

    position: relative;

    width: fit-content;

    &::before {
      content: "\0024";
      font-size: $fs-4;
      position: absolute;
        top: 0;
        right: 100%; 
    }
  }

  // HOVER
  transition: transform $_speed-5 $_cubicB-bounce;

  &:hover {
    transform: scale(1.3);
  }
}
</style>