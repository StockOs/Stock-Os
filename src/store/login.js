import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../middlewares/firebase-config'
import router from '../router/index'

Vue.use(Vuex)

const initialState = {
  isLoading: false,
  token: localStorage.getItem('user-token') || null,
  status: '',
  errors: false,
}

export default new Vuex.Store({

  state: {
    ...initialState,
  },

  getters: {
    IS_AUTHENTIFICATED: state => !!state.token,
    AUTH_STATUS: state => state.status,
    HAS_LOGIN_ERRORS: (state) => {
      return state.errors
    }
  },

  mutations: {
    START_LOADING: (state) => {
      state.isLoading = true
    },
    STOP_LOADING: (state) => {
      state.isLoading = false
    },
    SET_TOKEN: (state, token) => {
      state.status = 'success'
      state.token = token
    },
    SET_ERRORS: (state, errors) => {
      state.errors = errors
    },
  },

  actions: {
    LOGIN: ({ commit }, { user }) => {
      commit('START_LOADING')
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(userData => {
          commit('STOP_LOADING')
          const token = userData.user.za
          localStorage.setItem('user-token', token)
          commit('SET_TOKEN', token)
          router.replace({
            name: 'Home'
          })
        })
        .catch(() => {
          commit('STOP_LOADING')
          commit('SET_ERRORS', true)
          localStorage.removeItem('user-token')
        })
    },
  }
})
