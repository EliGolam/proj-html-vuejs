<template>
  <div id="app">
    <PageHeader />

    <router-view/>
  </div>
</template>

<script>
import PageHeader from './components/mainComponents/PageHeader.vue';

export default {
  components: { 
    PageHeader
  }
}
</script>


