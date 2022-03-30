import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePastelero from '../views/HomePastelero.vue'
import Pago from '../views/Pago.vue'

const routes = [
  {
    path: '/cliente',
    name: 'homeCliente',
    component: HomeView
  },
  {
    path: '/pastelero',
    name: 'homePastelero',
    component: HomePastelero
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Pagar.vue')
  },
  {
    path: '/cliente/pago',
    name: 'pago',
    component: Pago
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
