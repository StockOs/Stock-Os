import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../firebase-config'
import router from '../router/index'

Vue.use(Vuex)

const initialState = {
  isLoading: false,
  token: localStorage.getItem('user-token') || '',
  status: '',
  errors: false,
}

export default new Vuex.Store({

  state: {
    ...initialState,
  },

  getters: {
    isAuthentificated: state => !!state.token,
    authStatus: state => state.status,
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
    AUTH_SUCCESS: (state, token) => {
      state.status = 'success'
      state.token = token
    },
    SET_ERRORS: (state, errors) => {
      state.errors = errors
    },
  },

  actions: {
    login: ({ commit }, { user }) => {
      commit('START_LOADING')
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
          console.log('DATA', data.user.refreshToken)
          const token = data.user.refreshToken
          localStorage.setItem('user-token', token)
          commit('AUTH_SUCCESS', token)
          router.replace({
            name: 'Home'
          })
        })
        .catch((errors) => {
          console.log('ERROR', errors.message)
          commit('STOP_LOADING')
          commit('SET_ERRORS', true)
          localStorage.removeItem('user-token')
        })

    },
  }
})