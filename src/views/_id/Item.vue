<template>
  <form class="form" @submit.prevent="updateItem()">
    <div class="form-container" v-for="(items,i) in items" :key="i">
      <h2 class="uppercase-text">Modifier l'item</h2>
      <BaseInput 
        label="Nom de 'item" 
        v-model="items.name"
      />
      <BaseInput 
        label="Quantité" 
        v-model="items.quantity"
      />
      <BaseInput 
        label="Prix" 
        v-model="items.price"
      />
      <button type="submit">Valider</button>
    </div>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
export default {
  components:{
    BaseInput,
  },
  
  mounted(){
    this.$store.itemStock.dispatch("getItem");
  },

  computed: {
    items() {
      return this.$store.itemStock.getters.displayItemStock
    },
  },

  methods: {
    updateItem(){
      this.$store.itemStock.dispatch('updateItems')
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