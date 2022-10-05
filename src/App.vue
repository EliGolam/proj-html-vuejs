<template>
  <div id="app">
    <div class="hero-bg">
      <PageHeader />

      <InfoArticleComponent />
    </div>
    

    <router-view/>
  </div>
</template>

<script>
import PageHeader from './components/mainComponents/PageHeader.vue';
import InfoArticleComponent from './components/InfoArticleComponent.vue';

export default {
  components: {
    PageHeader,
    InfoArticleComponent
}
}
</script>


