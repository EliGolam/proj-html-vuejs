<template>
  <div id="app">
    <div class="loading-screen flex-column-center" v-show="loading">
      <PageLoaderComponent />
    </div>

    <div>
      <!-- v-if to prevent duplicate headers since homeview has one -->
      <AppHeader v-if="$route.name !== 'home'" /> 
      <AppHeaderWithHeroBG v-else />

      <!-- Router View -->
      <router-view />
    </div>

    <AppFooter />
  </div>
</template>


<!-- SCRIPT -->
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppHeaderWithHeroBG from './components/AppHeaderWithHeroBG.vue';
import AppFooter from './components/AppFooter.vue';
import PageLoaderComponent from './components/shared/PageLoaderComponent.vue';

export default {
  name: 'App',

  data() {
    return {
      loading: true
    }
  },

  mounted() {
    setTimeout(() => {
      console.log(this.loading);
      this.loading = false;
    }, 5000);
  },

  components: {
    AppHeader,
    AppHeaderWithHeroBG,
    AppFooter,
    PageLoaderComponent
}
}
</script>
