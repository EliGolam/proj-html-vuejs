<template>
  <div id="app">
    <AppHeader v-if="$route.name !== 'home'" /> <!-- v-if to prevent duplicate headers since homeview has one -->
    <AppHeaderWithHeroBG v-else />
    <!-- Implement here with v-else as component -->
    


    <!-- Router View -->
    <router-view/>
  </div>
</template>


<!-- SCRIPT -->
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppHeaderWithHeroBG from './components/AppHeaderWithHeroBG.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppHeaderWithHeroBG
}
}
</script>


