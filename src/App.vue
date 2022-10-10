<template>
  <div id="app">
    <h1 class="pageTitle visually-hidden">Bakery Avada</h1>

    <!-- v-if to prevent duplicate headers since homeview has one -->
    <AppHeader v-if="$route.name !== 'home'" /> 
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


