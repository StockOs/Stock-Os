import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from '../middlewares/firebase-config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: "main", requiresAuth: true },
    component: require("../views/Home.vue").default
  },
  {
    path: '/login',
    name: 'Login',
    component: require("../views/Login.vue").default
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: require("../views/SignUp.vue").default
  },
  {
    path: '/stockCreation',
    name: 'stockCreation',
    meta: {requireAuth: true },
    component: () => import('../views/StockCreation.vue')
  },
  {
    path: '/stock',
    name: 'stock',
    meta: {layout: "main" ,requireAuth: true },
    component: () => import('../views/Stock.vue')
  },
  {
    path: '/item/:itemUid',
    name: 'item',
    meta: {requireAuth: true },
    component: () => import('../views/_id/Item.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   if (requiresAuth && !currentUser) {
//     next('login')
//   } else if (!requiresAuth && currentUser) {
//     next('home')
//   } else {
//     next()
//   }
// })

export default router
