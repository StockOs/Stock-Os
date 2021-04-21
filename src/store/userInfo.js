import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    userInfos:{
      name: '',
      email: '',
      bankCard: null,
    },
  },

  getters: {
    displayUser:(state) => {
      return state.userInfos
    }
  },
  mutations: {
    GET_USER_ID:(state, user_id) => {
      state.userInfos.id = user_id
    },

    GET_USER_NAME:(state, user_name) => {
      state.userInfos.name = user_name
    },

    GET_USER_EMAIL:(state, user_email) => {
      state.userInfos.email = user_email
    },

    GET_USER_BANK_CARD:(state, user_bank_card) => {
      state.userInfos.bankCard = user_bank_card
    },

    UPDATE_NAME:(state, name) => {
      state.userInfos.name = name
    },

    UPDATE_EMAIL:(state, email) => {
      state.userInfos.email = email
    },

    UPDATE_BANK_CARD:(state, bankCard) => {
      state.userInfos.bankCard = bankCard
    },
  },

  actions: {
    getUser({commit}) {
      axios.get('http://localhost:3000/api/user/info', {
      headers:{
          "Authorization": `Bearer ${localStorage.getItem('user-token')} `,
        },
      }).then(res => {
        const user_id =  res.data.data[0].id
        commit('GET_USER_ID', user_id)

        const user_name =  res.data.data[0].name
        commit('GET_USER_NAME', user_name)

        const user_email =  res.data.data[0].email
        commit('GET_USER_EMAIL', user_email)

        const user_bank_card =  res.data.data[0].bankCard
        commit('GET_USER_BANK_CARD', user_bank_card)
      })
    },

    updateUser({state}) {

      const user = {
        name: state.userInfos.name,
        email: state.userInfos.email,
        bankCard: state.userInfos.bankCard,
      }
      console.log('action updateUser', user)
      axios.put('http://localhost:3000/api/user', user ,{
      headers:{
          "Authorization": `Bearer ${localStorage.getItem('user-token')} `,
        },
      }).then(res => {
        if(res.status == 201){
          console.log('ok')
        }
      }).catch(err => {
        console.error(err)
      })
    }
  }
})