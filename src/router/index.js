import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from '../middlewares/firebase-config'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    next('login')
  } else if (!requiresAuth && currentUser) {
    next('home')
  } else {
    next()
  }
})

export default router
