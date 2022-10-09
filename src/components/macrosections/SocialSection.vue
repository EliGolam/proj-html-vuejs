<template>
  <section class="flex">

    <div class="row flex">
      <div class="card">
        <img src="@/assets/images/social-1.jpg" alt="">
      </div>
      <div class="info-box"></div>
      <div class="card">
        <img src="@/assets/images/social-2.jpg" alt="">
      </div>
    </div>

    <div class="row flex">
      <div class="card">
        <img src="@/assets/images/social-3.jpg" alt="">
      </div>
      <div class="card">
        <img src="@/assets/images/social-4.jpg" alt="">
      </div>
      <div class="card">
        <img src="@/assets/images/social-5.jpg" alt="">
      </div>
      <div class="card">
        <img src="@/assets/images/social-6.jpg" alt="">
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

$c-gap: $_size-2;
$r-gap: $_size-2;

section {
  row-gap: $r-gap;

  flex-direction: column;
}
.row {
  column-gap: $c-gap;
  justify-content: space-between;

  .info-box {
    flex-grow: 1;
    background-color: rgba($clr-primary-purple, .3);
  }

  .card {
    width: calc(100% / 4 - $c-gap);
  }
}
</style>