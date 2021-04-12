<template>
  <section class="stock">
    <ItemCreation 
      class="itemCrea" 
      @addItemStock='emitItemStock' 
      :isStockIsInDash="true"
    />
    <StockDisplayTable class="stock-Table">
      <template v-slot:actionsTitle>
        <th>actions</th>
      </template>
      <template v-slot:actions>
        <button @click="editItem()">edit</button>
        <button @click="deleteItemStock()">delete</button>
      </template>
    </StockDisplayTable>
  </section>
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
      },

      deleteItemStock() {
        this.$store.itemStock.commit("DELETE_ITEMS_STOCK")
      },

      editItem(){
        open(this.$router.resolve({name: "item", params: { itemUid: 'ef544s56' },}).href, "_blank");
      }
    }
  }
</script>