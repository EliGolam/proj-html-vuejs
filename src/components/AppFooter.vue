<template>
  <footer class="container">
    <div class="nav-elements">
      <LogoComponent />
      
      <NavBarComponent :navLinks="links" />
    </div>
    
    <div class="cta-newsletter">
      
    </div>
  </footer>
</template>

<script>
import LogoComponent from '@/components/shared/LogoComponent.vue';
import NavBarComponent from './shared/NavBarComponent.vue';

import { NAV_LINKS } from '@/assets/data/navLinksData';

export default {
    name: "AppFooter",
    data() {
      return {
        links: NAV_LINKS.footer,
      }
    },

    components: { 
      LogoComponent, 
      NavBarComponent 
    }
}
</script>

<style lang="scss" scoped>

</style>