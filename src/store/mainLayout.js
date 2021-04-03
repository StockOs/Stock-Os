import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = {
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
      path: '/stocks',
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
      icon: 'unlock',
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
      // return (route) => {
      //   const currentPath = route
      return state.menuItems
      //   .map((menuItem) => {
      //   return {
      //     ...menuItem,
      //     // selected: currentPath === menuItem.path,
      //   }
      // }
        // )
      }
  },
  mutations: {
  },
  actions: {
    changeCurrentPage: (path) => {
      this.$router.push(path)
    },
    logout: () => {
      //Add Remove Token LocalStorage
      this.$router.push('/login')
    },
  },
  modules: {
  }
})
