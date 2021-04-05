import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: "main" },
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

export default router
