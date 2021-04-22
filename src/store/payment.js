import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    paymentInformations: {
      name: "",
      cardNumber: "",
      expMonth: null,
      expYear: null,
      codeCVC: null,
    },
    isPopUpDisplayed: false,
  },

  mutations: {
    DISPLAY_POPUP: (state) => {
      state.isPopUpDisplayed = true
    }
  },

  actions: {
    ADD_PAYMENT({ state, commit }) {
      axios.post('http://localhost:3000/api/payment', {
        name: state.paymentInformations.name,
        cardNumber: state.paymentInformations.cardNumber,
        expMonth: state.paymentInformations.expMonth,
        expYear: state.paymentInformations.expYear,
        codeCVC: state.paymentInformations.codeCVC,
      }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('user-token')} `,
        },
      }).then(() => {
        commit('DISPLAY_POPUP')
        setTimeout(() => {
          router.replace({ name: 'stockCreation' })
        }, 1000)
      }).catch((error) => {
        console.log('error', error)
      })
    },
  }
})