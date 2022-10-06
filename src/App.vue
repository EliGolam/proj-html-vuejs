<template>
  <div id="app">
    <PageHeader v-if="$route.name !== 'home'" /> <!-- v-if to prevent duplicate headers since homeview has one -->
    
    <!-- Router View -->
    <router-view/>
  </div>
</template>


<!-- SCRIPT -->
<script>
import PageHeader from '@/components/mainComponents/PageHeader.vue';

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
  }
}
</script>


