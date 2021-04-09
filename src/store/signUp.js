import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../middlewares/firebase-config'
import router from '../router/index'

Vue.use(Vuex)

const initialState = {
  isLoading: false,
  errors: {
    email: [],
    password: [],
  }
  ,
}

export default new Vuex.Store({

  state: {
    ...initialState,
  },

  getters: {
    HAS_SIGN_UP_ERRORS: (state) => {
      return state.errors
    },
    HAS_SIGN_UP_EMAIL_ERRORS: (state) => {
      return state.errors.email
    }
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
    SET_EMAIL_ERRORS: (state, errors) => {
      state.errors.email = errors
    },
  },

  actions: {
    SIGN_UP: ({ commit }, { user }) => {
      console.log('hey')
      commit('START_LOADING')
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(userData => {
          console.log('hey2')
          userData.user
            .updateProfile({
              displayName: this.form.name
            })
          console.log('hey3')
          commit('STOP_LOADING')
          router.replace({name: 'Login'})
        })
        .catch((err) => {
          console.log('err', err)
          let emailError
          err.code === 'auth/invalid-email' ? emailError = err : null
          commit('STOP_LOADING')
          commit('SET_EMAIL_ERRORS', emailError)
          commit('SET_ERRORS', err)
        })
    },
  }
})
