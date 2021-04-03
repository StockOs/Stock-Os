import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = {
  loading: false,
  menuItems: [
    {
      name: 'Home',
      icon: 'list',
      path: '/',
    },
    {
      name: 'Stocks',
      icon: 'user',
      path: '/stocks',
    },
    {
      name: 'Commandes',
      icon: 'book-open',
      path: '/orders',
    },
    {
      name: 'Livraison',
      icon: 'shopping-cart',
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
      return (route) => {
        const currentPath = route
        return state.menuItems.map((menuItem) => {
          return {
            ...menuItem,
            selected: currentPath === menuItem.path,
          }
        })
      }
    },
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
