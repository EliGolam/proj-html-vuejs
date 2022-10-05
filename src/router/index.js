import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: */ '../views/ShopView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: */ '../views/AboutView.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: */ '../views/GalleryView.vue')
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import(/* webpackChunkName: */ '../views/LocationsView.vue')
  },
  {
    path: '/journal',
    name: 'journal',
    component: () => import(/* webpackChunkName: */ '../views/JournalView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: */ '../views/ContactView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
