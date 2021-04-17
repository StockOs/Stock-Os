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
      return state.itemsStock
    }
  },
  mutations: {
    ADD_ITEMS_STOCK:(state, itemsStock) => {
      state.itemsStock = itemsStock
    },

    POST_ITEMS_STOCK:(state) => {
      state.itemsStock.push(state.item)
      document.location.reload();
    },

    RESET_INPUT_VALUE:(state) => {
      state.item.name = ''
      state.item.quantity = ''
      state.item.price = ''
    },

    DELETE_ITEMS_STOCK:(state, index) => {
      state.itemsStock.splice(index, 0)
      document.location.reload();
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

    postItems({state, commit}) {
      axios.post('http://localhost:3000/api/items', {
        name: state.item.name,
        quantity: state.item.quantity,
        price: state.item.price
      },{
      headers:{
          "Authorization": `Bearer ${localStorage.getItem('user-token')} `,
        },
      }).then(res => {
        commit('POST_ITEMS_STOCK', res.data.data)
      })
    },

    deleteItems({state, commit}, index){
      let keyItem = 0
      for (let index = 0; index < state.itemsStock.length; index++) {
        keyItem = state.itemsStock[index].keyItem;
      }

        axios.delete('http://localhost:3000/api/items/' + keyItem, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('user-token')} `,
          },
        }).then(res => {
          commit('DELETE_ITEMS_STOCK', res.data.data, index)
          console.log('keyItem',keyItem)
      })
    }
  },


})