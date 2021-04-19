import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'




Vue.use(Vuex)



export default new Vuex.Store({

  state: {
    item: {
      name: "",
      quantity: null,
      price: null,  
    },
    itemsStock: [],
  },

  getters: {
    displayStock:(state) => {
      return state.itemsStock
    },

    displayItemStock:(state) => {
      console.log('getter', state.item)
      return state.item
    },
  },
  mutations: {
    ADD_ITEMS_STOCK:(state, itemsStock) => {
      state.itemsStock = itemsStock
    },

    ADD_ITEM_STOCK:(state, item) => {
      state.item = item
    },

    UPDATE_ITEM_STOCK:(state, {item}) => {
      state.item = item
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
        const items =  res.data.data
        commit('ADD_ITEMS_STOCK', items)
      })
    },

    getItem({commit}) {
      const keyItem = router.app._routerRoot._route.params.itemId

      axios.get('http://localhost:3000/api/items/' + keyItem,{
      headers:{
          "Authorization": `Bearer ${localStorage.getItem('user-token')} `,
        },
      }).then(res => {
        const itemKey =  res.data.data
        commit('ADD_ITEM_STOCK', itemKey)
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
        const item = res.data.data
        commit('POST_ITEMS_STOCK', item)
      })
    },

    updateItems({state, commit}) {
      const keyItem = router.app._routerRoot._route.params.itemId

      axios.put('http://localhost:3000/api/items/' + keyItem, {
        name: state.item != "" ? state.item : undefined,
        // quantity: state.item.quantity,
        // price: state.item.price
      },{
      headers:{
          "Authorization": `Bearer ${localStorage.getItem('user-token')} `,
        },
      }).then(res => {
        const itemUpdate = res.data.data
        commit('UPDATE_ITEMS_STOCK', itemUpdate)
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
          const item = res.data.data
          commit('DELETE_ITEMS_STOCK', item, index)
      })
    }
  },


})