<template>
  <div id="app">
    <div class="loading-screen flex-center">
      <p v-if="loading">Loading page...</p>
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

export default {
  name: 'App',

  data() {
    return {
      loading: false
    }
  },

  components: {
    AppHeader,
    AppHeaderWithHeroBG,
    AppFooter
  }
}
</script>


