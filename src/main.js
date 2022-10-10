import Vue from 'vue'
import App from './App.vue'
import router from './router'



/* FONT AWESOME SETUP */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Icons
import { faCartShopping as fasCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight, faAngleLeft, faAnglesUp, faAngleDown, faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons'

library.add( fasCartShopping, faAngleRight, faAngleLeft, faAnglesUp, faAngleDown, faBreadSlice, faInstagram, faTwitter, faFacebookF, faPinterestP )  

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)



/* Import Global Style */
import './assets/styles/style.scss'


/* VUE SETUP */
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
