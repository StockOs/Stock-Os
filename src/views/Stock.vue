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
      <!-- <template v-slot:actions="slotProps">
        <BaseIcon @click="editItem(slotProps)" href="pencil" class="edit-icon"/>
        <BaseIcon @click="deleteItemStock(slotProps.index)" href="delete" class="delete-icon"/>
      </template> -->
    </StockDisplayTable>
  </section>
</template>

<script>
  import ItemCreation from '@/components/ItemCreation.vue'
  import StockDisplayTable from '@/components/StockDisplayTable.vue'
  // import BaseIcon from '@/components/icons/BaseIcon.vue'

  export default {
    components: {
      ItemCreation,
      StockDisplayTable,
      // BaseIcon
    },

    methods: {
      addItemStock() {
        this.$store.itemStock.dispatch('postItems')
      },
    }
  }
</script>