import { createRouter, createWebHistory } from 'vue-router'
import Authentication from '../views/Authentication.vue'

const routes = [
  {
    path: '/',
    /* name: 'Home',
    component: Home */
    redirect: '/login'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/login',
    name: 'Authentication',
    component: () => import('../views/Authentication.vue')
  },
  {
    path: '/market',
    name: 'Market',
    component: () => import('../views/Market.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
