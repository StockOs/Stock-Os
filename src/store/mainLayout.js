import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

const initialState = {
  path: '',
  isLoading: false,
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
  ],
}

export default new Vuex.Store({

  state: {
    ...initialState,
  },

  getters: {
    getMenuItemsForRoute: (state) => {
      const currentPath = state.path

      return state.menuItems.map((menuItem) => {
        return {
          ...menuItem,
          selected: currentPath === menuItem.path,
        }
      })
    },
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
})
