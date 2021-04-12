<template>
  <form class="form" @submit.prevent="addItemStock()">
    <h2 class="uppercase-text">Ajoutez vos Items</h2>
    <BaseInput 
      :class="{'input-stock-dash': inputIsInStockDash}"
      label="Items" 
      v-model="item.name"
    />
    
    <BaseInput 
      :class="{'input-stock-dash': inputIsInStockDash}"
      label="Quantité" 
      v-model="item.quantity"
    />

    <BaseInput 
      :class="{'input-stock-dash': inputIsInStockDash}"
      label="Prix a l'unité" 
      v-model="item.price"
    />

    <button class="buttonForm" type="submit">Ajouter un item</button>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'

export default {
  props:{
    inputIsInStockDash:{
      type: Boolean,
      default: false
    }
  },
  components: {
    BaseInput,
  },
  computed: {
    item() {
      return this.$store.itemStock.state.item
    },
  },
  methods: {
    addItemStock() {
      const item = {
        name: this.item.name,
        quantity: this.item.quantity,
        price: this.item.price,
      }
      if(this.item.name != "" && this.item.quantity != null  && this.item.price != '' ){
        this.$emit('addItemStock', {item})
        this.$store.itemStock.commit("RESET_INPUT_VALUE", item)
      }
    },
  }
}
</script>