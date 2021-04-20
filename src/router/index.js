import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: "main" },
    component: require("../views/Home.vue").default
  },
  {
    path: '/settings',
    name: 'settings',
    meta: { layout: "main" },
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      public: true,
    },
    component: require("../views/Login.vue").default
  },
  {
    path: '/signup',
    name: 'SignUp',
    meta: {
      public: true,
    },
    component: require("../views/SignUp.vue").default
  },
  {
    path: '/stockCreation',
    name: 'stockCreation',
    component: () => import('../views/StockCreation.vue')
  },
  {
    path: '/stock',
    name: 'stock',
    meta: {layout: "main"},
    component: () => import('../views/Stock.vue')
  },
  {
    path: '/item/:itemId',
    name: 'item',
    component: () => import('../views/_id/Item.vue')
  },
  {
    path: '/status',
    name: 'status',
    component: () => import('../views/Status.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => !record.meta.public)) {
    if (store.login.state.token != null) {
      next()
      return
    }
    next({name: "Login"})
  } else if (to.matched.some(record => record.meta.public) && store.login.state.token) {
    next('/home')
  } else {
    next()
  }
})

export default router
