import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)



export default new Vuex.Store({

  state: {
    item: {
      name: '',
      quantity: null,
      price: null,  
    },
    itemsStock: [],
  },

  getters: {
    displayStock:(state) => {
      // return state.itemsStock.map(el => el.item)
      // console.log(state.itemsStock)
      return state.itemsStock
    }
  },
  mutations: {
    ADD_ITEMS_STOCK:(state, itemsStock) => {
      state.itemsStock = itemsStock
    },

    POST_ITEMS_STOCK:(state, {item}) => {
      state.itemsStock.push(item)
    },

    RESET_INPUT_VALUE:(state) => {
      state.item.name = ''
      state.item.quantity = ''
      state.item.price = ''
    },

    DELETE_ITEMS_STOCK:(state, index) => {
      state.itemsStock.splice(index, 1)
    }
  },

  actions: {
    getItems({commit}) {
      axios.get('http://localhost:3000/api/items', {
      headers:{
          "Authorization": `Bearer ${localStorage.getItem('user-token')} `,
        },
      }).then(res => {
        commit('ADD_ITEMS_STOCK', res.data.data)
      })
    },

    postItems({state, commit}, item) {
        axios.post('http://localhost:3000/api/items', {
          name: state.item.name,
          quantity: state.item.quantity,
          price: state.item.price
        },{
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('user-token')} `,
          },
        }).then(res => {
          item = res.data.data
          commit('POST_ITEMS_STOCK', item)
          console.log(localStorage.getItem('user-token'))
        })
      }
  },

})