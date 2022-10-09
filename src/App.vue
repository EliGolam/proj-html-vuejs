<template>
  <div id="app">
    <AppHeader v-if="$route.name !== 'home'" /> <!-- v-if to prevent duplicate headers since homeview has one -->
    <AppHeaderWithHeroBG v-else />

    <!-- Router View -->
    <router-view/>

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

  components: {
    AppHeader,
    AppHeaderWithHeroBG,
    AppFooter
}
}
</script>


