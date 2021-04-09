import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: "main" },
    component: require("../views/Home.vue").default
  },

  {
    path: '/stockCreation',
    name: 'stockCreation',
    meta: {requireAuth: true },
    component: () => import('../views/StockCreation.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
