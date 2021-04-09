import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({

  state: {
    item: {
      name: '',
      quantity: null,
      price: null,  
    },
    itemsStock: []
  },

  getters: {
    displayStock:(state) => {
      return state.itemsStock.map(el => el.item)
    }
  },
  mutations: {
    ADD_ITEMS_STOCK:(state, {item}) => {
      state.itemsStock.push({item})
    },
    RESET_INPUT_VALUE:(state) => {
      state.item.name = ''
      state.item.quantity = ''
      state.item.price = ''
    }
  },

  actions: {
  },
})