<template>
  <form class="form" @submit.prevent="addItemStock()">
    <h2 class="uppercase-text">Ajoutez vos Items</h2>
    <BaseInput 
      label="Items" 
      v-model="item.name"
    />
    
    <BaseInput 
      label="Quantité" 
      v-model="item.quantity"
    />

    <BaseInput 
      label="Prix a l'unité" 
      v-model="item.price"
    />

    <button class="buttonForm" type="submit">Ajouter un item</button>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'

export default {
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
      if(this.item.name != "" && this.item.quantity != null  && this.item.price != null ){
        this.$emit('addItemStock', {item})
        this.$store.itemStock.commit("RESET_INPUT_VALUE", item)
      }
    },
  }
}
</script>
