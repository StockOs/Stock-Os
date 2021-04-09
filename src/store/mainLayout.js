import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import firebase from 'firebase'

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
  errors: [],
}

export default new Vuex.Store({

  state: {
    ...initialState,
  },

  getters: {
    GET_MENU_ITEMS_FOR_ROUTE: (state) => {
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
    START_LOADING: (state) => {
      state.isLoading = true
    },
    STOP_LOADING: (state) => {
      state.isLoading = false
    },
    CHANGE_PATH: (state, path) => {
      state.path = path
      router.push(path)
    },
    SET_ERRORS: (state, errors) => {
      state.errors = errors
    }
  },
  actions: {
    LOGOUT: ({ commit }) => {
      commit('START_LOADING')
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('STOP_LOADING')
          localStorage.removeItem('user-token')
          router.push('/login')
        })
        .catch((errors) => {
          commit('STOP_LOADING')
          commit('SET_ERRORS', errors.message)
        })
    },
  },
})
