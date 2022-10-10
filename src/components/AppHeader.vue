<template>
	<header class="wide-container flex-center">

		<LogoComponent />

    <div class="menu" :class="{ active : isNavBarActive }">
      <font-awesome-icon icon="fa-solid fa-bars" 
        class="menu-icon hamburger-menu" 
        @click="toggleNavBar()"
      />

      <nav class="nav-bar" role="navigation" aria-labelledby="nav-bar__title">

        <h2 id="nav-bar__title" class="visually-hidden">Header Nav Bar</h2>
        
        <RoutingNavComponent :navLinks="links" class="navLinks" />

        <MyAccountComponent class="my-account" />

        <ShoppingCartComponent />
      </nav>
    </div>	

	</header>
</template>

<script>
// Components
import MyAccountComponent from '@/components/MyAccountComponent.vue';
import ShoppingCartComponent from '@/components/ShoppingCartComponent.vue';
import RoutingNavComponent from '@/components/shared/RoutingNavComponent.vue';

// Import Data
import navLinksData from '@/assets/data/navLinksData.json';
import LogoComponent from './shared/LogoComponent.vue';


export default {
	data() {
		return {
			links: navLinksData.headerLinks,
      isNavBarActive: false,
		}
	},

  methods: {
    toggleNavBar() {
      console.log("Toggling");
      this.isNavBarActive = !this.isNavBarActive;
    }
  },
  
  components: {
    MyAccountComponent,
    ShoppingCartComponent,
    RoutingNavComponent,
    LogoComponent
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

header {
  .menu {
    position: relative;
    margin-left: auto; // Align Content to the right

    .menu-icon  {
      cursor: pointer;
      font-size: $fs-2;
    }

    @media only screen and (max-width: $md-breakpoint) {
      .nav-bar {
        display: none;
        position: absolute;
          right: 0%;
      }
      &.active {
        .nav-bar {
          display: flex;
        }
        
      }

      
    }

    @media only screen and (min-width: $md-breakpoint) {
      flex-direction: row;
      align-items: center;
  
      .nav-bar {
        display: flex;
      }
  
      .menu-icon  {
        display: none;
      }
    }
  }
  

 

  
}
</style>