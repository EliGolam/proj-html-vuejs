<template>
	<header class="wide-container flex-center">

		<LogoComponent />

    <div class="menu" >
      <font-awesome-icon icon="fa-solid fa-bars" 
        v-if="!isNavBarActive"
        class="menu-icon hamburger-menu" 
        @click="toggleNavBar()"
      />

      <font-awesome-icon icon="fa-solid fa-x"
        v-else
        class="menu-icon hamburger-menu" 
        @click="toggleNavBar()"
      />

      <nav class="nav-bar" role="navigation" aria-labelledby="nav-bar__title"
        :class="{ active : isNavBarActive }"
      >

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

        background-color: rgba($clr-light, .5);
        border-radius: .5em;
        width: 16ch;
        padding: $_size-4 $_size-1;

        &.active {
          display: flex;
          gap: $_size-1;
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