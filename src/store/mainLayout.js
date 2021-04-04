import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

const initialState = {
  path: '',
  loading: false,
  menuItems: [
    {
      name: 'Home',
      icon: 'home',
      path: '/',
    },
    {
      name: 'Stocks',
      icon: 'stocks',
      path: '/test',
    },
    {
      name: 'Commandes',
      icon: 'orders',
      path: '/orders',
    },
    {
      name: 'Livraison',
      icon: 'delivery',
      path: '/delivery',
    },
    {
      name: 'Paramètres',
      icon: '',
      path: '/settings',
    },
  ],
}

export default new Vuex.Store({

  state: {
    ...initialState,
  },

  getters: {
    getMenuItemsForRoute: (state) => {
        return state.menuItems
    },
    // newPath: (state) => {
    //   return state.path
    // }
  },
  mutations: {
    changePath: (state, path) => {
      state.path = path
      router.push(path)
    }
  },

  actions: {
    logout: () => {
      //Add Remove Token LocalStorage
      this.$router.push('/login')
    },
  },
  modules: {
  }

})
