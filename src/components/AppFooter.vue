<template>
  <footer class="container flex">
    <div class="nav-elements">
      <LogoComponent />
      
      <nav class="flex">
        <NavBarComponent :navLinks="links" />

        <ShoppingCartComponent />
      </nav>
    </div>
    
    <SubscribeNewsletterFormComponent class="cta" />
  </footer>
</template>

<script>
import LogoComponent from '@/components/shared/LogoComponent.vue';
import NavBarComponent from './shared/NavBarComponent.vue';
import ShoppingCartComponent from './ShoppingCartComponent.vue';

import { footerLinks } from '@/assets/data/navLinksData.json';
import SubscribeNewsletterFormComponent from './SubscribeNewsletterFormComponent.vue';


export default {
    name: "AppFooter",
    data() {
      return {
        links: footerLinks,
      }
    },

    components: {
    LogoComponent,
    NavBarComponent,
    ShoppingCartComponent,
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
  align-items: center;

  gap: $_size-4;
}
</style>