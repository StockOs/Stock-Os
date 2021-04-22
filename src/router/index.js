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
    path: '/stock',
    name: 'stock',
    meta: {layout: "main"},
    component: () => import('../views/Stock.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    meta: { layout: "main" },
    component: () => import('../views/Orders.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    meta: { layout: "main" },
    component: () => import('../views/Delivery.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    meta: { layout: "main" },
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/subscription',
    name: 'subscription',
    component: () => import('../views/Subscription.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/Payment.vue')
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
    path: '/item/:itemId',
    name: 'item',
    component: () => import('../views/_id/Item.vue')
  },
  {
    path: '/status',
    name: 'status',
    component: () => import('../views/Status.vue')
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: () => import('../views/_id/User.vue')
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
  }else {
    next()
  }
})

export default router
