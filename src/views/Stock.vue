<template>
  <section class="stock">
    <ItemCreation 
      class="itemCreationDashboardStock" 
      @addItemStock='addItemStock' 
      :inputIsInStockDash="true"
    />
    <StockDisplayTable class="stock-Table">
      <template v-slot:actionsTitle>
        <th>actions</th>
      </template>
      <template v-slot:actions="slotProps">
        <BaseIcon @click="editItem(slotProps.items)" href="pencil" class="edit-icon"/>
        <BaseIcon @click="deleteItemStock()" href="delete" class="delete-icon"/>
      </template>
    </StockDisplayTable>
  </section>
</template>

<script>
  import ItemCreation from '@/components/ItemCreation.vue'
  import StockDisplayTable from '@/components/StockDisplayTable.vue'
  import BaseIcon from '@/components/icons/BaseIcon.vue'

  export default {
    components: {
      ItemCreation,
      StockDisplayTable,
      BaseIcon
    },
    mounted(){
      this.$store.itemStock.dispatch("getItems");
    },
    methods: {
      addItemStock(item) {
        this.$store.itemStock.dispatch('postItems', item)
      },

      deleteItemStock() {
        this.$store.itemStock.commit("DELETE_ITEMS_STOCK")
      },

      editItem(id){
        console.log(id)
        open(this.$router.resolve({name: "item", params: { itemId: id },}).href, "_blank");
      }
    }
  }
</script>