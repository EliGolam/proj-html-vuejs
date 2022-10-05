<template>
  <div id="app">
    <div class="hero-bg">
      <PageHeader />

      <div class="container-info">
        <InfoArticleComponent :info="heroText" class="info-card" />
      </div>
    </div>
    

    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/mainComponents/PageHeader.vue';
import InfoArticleComponent from '@/components/InfoArticleComponent.vue';

import { PAGE_TEXT_DATA } from '@/assets/data/pageTextData';

export default {
  name: 'App',

  data() {
    return {
      heroText: PAGE_TEXT_DATA.heroText,
    }
  },

  components: {
    PageHeader,
    InfoArticleComponent
  }
}
</script>

<style lang="scss" scoped>

</style>

