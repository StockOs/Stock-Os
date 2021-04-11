<template>
  <form class="form">
    <h2 class="uppercase-text">Modifier l'item</h2>
    <BaseInput 
      label="Nom de 'item" 
      v-model="item.name"
    />
    <BaseInput 
      label="Quantité" 
      v-model="item.quantity"
    />
    <BaseInput 
      label="Prix" 
      v-model="item.price"
    />
    <button>Valider</button>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
export default {
  components:{
    BaseInput,
  },
  computed: {
    item() {
      return this.$store.itemStock.state.item
    },
  },
}
</script>

<style>
  .form {
    margin: 0 auto;
  }
</style>