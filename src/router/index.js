import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: "main" },
    component: require("../views/Home.vue").default
  },
  {
    path: '/test',
    name: 'Test',
    meta: { layout: "main" },
    component: Test,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
