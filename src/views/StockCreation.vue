<template>
  <main>
    <h1>Création du stock</h1>
    <div class="content">
      <ItemCreation @addItemStock='emitItemStock'/>
      <div class="table">
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

<style>
  body {
    background-color: var(--background-light-blue);
  }

  h1 {
    font-size: 1rem;
    padding: 10px;
  }

  .content {
    display: flex;
    justify-content: space-evenly;
  }

  .table {
    width: 580px;
    height: 525px;
    background-color: darkgray;
  }

</style>