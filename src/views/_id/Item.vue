<template>
  <form class="form" @submit.prevent="updateItem()">
      <h2 class="uppercase-text">Modifier l'item</h2>
      <BaseInput 
        label="Nom de 'item" 
        v-model="name"
      />
      <BaseInput 
        label="Quantité" 
        v-model="quantity"
      />
      <BaseInput 
        label="Prix" 
        v-model="price"
      />
      <BaseButton type="submit">Valider</BaseButton>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
export default {
  components:{
    BaseInput,
    BaseButton
  },
  
  mounted(){
    this.$store.itemStock.dispatch("getItem");
  },

  computed: {
    items() {
      return this.$store.itemStock.state.item
    },

    name: {
      get () {
        return this.$store.itemStock.state.item.name
      },
      set (value) {
        this.$store.itemStock.commit('UPDATE_NAME', value)
      },
    },

    price: {
      get () {
        return this.$store.itemStock.state.item.price
      },
      set (value) {
        this.$store.itemStock.commit('UPDATE_PRICE', value)
      },
    },

    quantity: {
      get () {
        return this.$store.itemStock.state.item.quantity
      },
      set (value) {
        this.$store.itemStock.commit('UPDATE_QUANTITY', value)
      },
    },
  },

  methods: {
    updateItem(){
      this.$store.itemStock.dispatch('updateItem')
    }
  }
  
}
</script>

<style>
  .form {
    margin: 0 auto;
  }

  .form-container {
    display: flex;
    height: 423px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
</style>