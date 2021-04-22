import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    isPopUpDisplayed: true,
  },

  getters: {
  },

  mutations: {
    DISPLAY_POPUP: (state) => {
      state.isPopUpDisplayed = true
    }
  },

  actions: {
    ADD_PAYMENT({ state, commit }) {
      console.log('ADD_PAYMENT')
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
      }).then(res => {
        commit('DISPLAY_POPUP')
        res.status()
      }).catch((error) => {
        console.log('error', error)
      })
    },
  }
})