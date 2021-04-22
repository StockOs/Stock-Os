<template>
  <main class="poppins">
    <div class="container">
      <h1 class="stock-title subtitle">Création du stock</h1>
      <div class="content">
        <ItemCreation @addItemStock='addItemStock'/>
        <StockDisplayTable/>
      </div>
    </div>
  </main>
</template>

<script>
  import ItemCreation from '@/components/ItemCreation.vue'
  import StockDisplayTable from '@/components/StockDisplayTable.vue'

  export default {
    components: {
      ItemCreation,
      StockDisplayTable
    },
      mounted(){
      this.$store.itemStock.dispatch("getItems");
    },
    methods: {
      addItemStock(item) {
        this.$store.itemStock.dispatch('postItems', item)
      },
    }
  }
</script>
