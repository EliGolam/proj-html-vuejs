<template>
  <footer class="container flex">
    <div>
      <LogoComponent />

      <nav class="flex">
        <RoutingNavComponent :navLinks="links" :isLowerCase="true" />
        <CartWithCounterComponent />
      </nav>
    </div>
    
    <SubscribeNewsletterFormComponent class="cta" />
  </footer>
</template>

<script>
import LogoComponent from '@/components/shared/LogoComponent.vue';
import RoutingNavComponent from '@/components/shared/RoutingNavComponent.vue';
import CartWithCounterComponent from '@/components/CartWithCounterComponent.vue';
import SubscribeNewsletterFormComponent from './SubscribeNewsletterFormComponent.vue';

import { footerLinks } from '@/assets/data/navLinksData.json';



export default {
    name: "AppFooter",
    data() {
      return {
        links: footerLinks,
      }
    },

    components: {
    LogoComponent,
    RoutingNavComponent,
    CartWithCounterComponent,
    SubscribeNewsletterFormComponent
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

footer {
  width: 100%;

  &> * {
    flex-grow: 1;
  }
}


nav {
  gap: $_size-4;
}
</style>