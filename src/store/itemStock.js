import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'




Vue.use(Vuex)



export default new Vuex.Store({

  state: {
    item: {
      name: "",
      quantity: "",
      price: null,  
    },
    itemsStock: [],
  },

  getters: {
    displayStock:(state) => {
      return state.itemsStock
    },

    displayItem:(state) => {
      return state.item
    },
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
      state.itemsStock.splice(index, 1)
      document.location.reload();
    },

    GET_ITEM_NAME:(state, item_name) => {
      state.item.name = item_name
    },

    GET_ITEM_PRICE:(state, item_price) => {
      state.item.price = item_price
    },

    GET_ITEM_QUANTITY:(state, item_quantity) => {
      state.item.quantity = item_quantity
    },

    UPDATE_NAME:(state, name) => {
      state.item.name = name
    },

    UPDATE_PRICE:(state, price) => {
      state.item.price = price
    },

    UPDATE_QUANTITY:(state, quantity) => {
      state.item.quantity = quantity
    },
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
        console.log('getItem', res.data.data)
        const item_name = res.data.data[0].name
        commit('GET_ITEM_NAME', item_name)

        const item_price = res.data.data[0].price
        commit('GET_ITEM_PRICE', item_price)

        const item_quantity = res.data.data[0].quantity
        commit('GET_ITEM_QUANTITY', item_quantity)
      })
    },

    updateItem({state}) {
      const keyItem = router.app._routerRoot._route.params.itemId

      const item = {
        name: state.item.name,
        price: state.item.price,
        quantity: state.item.quantity,
      }

      axios.put('http://localhost:3000/api/items/' + keyItem, item,{
      headers:{
          "Authorization": `Bearer ${localStorage.getItem('user-token')} `,
        },
      }).then(res => {
        console.log('update',res)
      }).catch(err => {
        console.error(err)
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

    deleteItems({ commit },keyItem){
        axios.delete('http://localhost:3000/api/items/' + keyItem, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('user-token')} `,
          },
        }).then(res => {
          console.log(res, keyItem)
          commit('DELETE_ITEMS_STOCK', keyItem)
      })
    }
  },
})
