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
  },
  mutations: {
    addItemStock(state){
      state.itemsStock.push(state.item)
      console.log(state.itemsStock)
    }
  },

  actions: {
  },
})