import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../middlewares/firebase-config'
import router from '../router/index'

Vue.use(Vuex)

const initialState = {
  isLoading: false,
  errors: [],
}

export default new Vuex.Store({

  state: {
    ...initialState,
  },

  getters: {
    HAS_SIGN_UP_ERRORS: (state) => {
      return state.errors
    },
    HAS_SIGN_UP_ERRORS_MESSAGE: (state) => {
      return state.errors.message
    },
  },

  mutations: {
    START_LOADING: (state) => {
      state.isLoading = true
    },
    STOP_LOADING: (state) => {
      state.isLoading = false
    },
    SET_ERRORS: (state, errors) => {
      state.errors = errors
    },
  },

  actions: {
    SIGN_UP: ({ commit }, { user }) => {
      commit('START_LOADING')
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(userData => {
          userData.user
            .updateProfile({
              displayName: this.form.name
            })
          commit('STOP_LOADING')
          router.replace({name: 'Login'})
        })
        .catch((err) => {
          commit('STOP_LOADING')
          commit('SET_ERRORS', err)
        })
    },
  }
})
