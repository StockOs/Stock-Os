<template>
  <main class="poppins">
    <div class="container">
      <h1 class="stock-title subtitle">Création du stock</h1>
      <div class="content">
        <ItemCreation @addItemStock='emitItemStock'/>
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
    methods: {
      emitItemStock(item) {
        this.$store.itemStock.commit("ADD_ITEMS_STOCK", item)
      }
    }
  }
</script>
