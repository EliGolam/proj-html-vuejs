<template>
  <footer class="container flex-column">
    <div class="row flex">
      <div>
        <LogoComponent />

        <nav class="nav-bar" role="navigation" aria-labelledby="nav-bar__title">
          <h2 id="nav-bar__title" class="visually-hidden">Footer Nav Bar</h2>
          <RoutingNavComponent :navLinks="links" :isLowerCase="true" />
          <CartWithCounterComponent />
        </nav>
      </div>
      
      <NewsletterFormComponent class="cta-subscribe" />
    </div>

    <div class="row flex">
      <CopyrightStatementComponent :copyrightText="copyright" />
      <SocialIconsComponent class="socials" />
    </div>
  </footer>
</template>



<!-- SCRIPT -->
<script>
// Components
import LogoComponent from '@/components/shared/LogoComponent.vue';
import RoutingNavComponent from '@/components/shared/RoutingNavComponent.vue';
import CartWithCounterComponent from '@/components/CartWithCounterComponent.vue';
import NewsletterFormComponent from '@/components/NewsletterFormComponent.vue';
import CopyrightStatementComponent from '@/components/CopyrightStatementComponent.vue';
import SocialIconsComponent from './shared/SocialIconsComponent.vue';

// Data
import { footerLinks } from '@/assets/data/navLinksData.json';
import footerTextData from '@/assets/data/footerTextData.json'



export default {
  name: "AppFooter",
  data() {
    return {
      links: footerLinks,
      copyright: footerTextData.copyright
    }
  },

  components: {
    LogoComponent,
    RoutingNavComponent,
    CartWithCounterComponent,
    NewsletterFormComponent,
    CopyrightStatementComponent,
    SocialIconsComponent
}
}
</script>


<!-- STYLE -->
<style lang="scss" scoped>
@import '@/assets/styles/variables';

footer {
  row-gap: $_size-7;
  .row {
    width: 100%;
    align-items: center;
    
    .cta-subscribe, 
    .socials {
      margin-left: auto;
    }
  }
}
</style>