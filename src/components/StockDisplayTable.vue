<template>
  <div class="stockTable">
    <table>
      <thead class="stockTable-header">
        <tr>
          <th>Nom de l'item</th>
          <th>Quantité</th>
          <th>Prix</th>
          <th>Actions</th>
          <!-- <slot name="actionsTitle"></slot> -->
        </tr>
      </thead>
      <tbody>
        <tr class="stockTable-item" v-for="(item, index) in items" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}</td>
          <!-- <slot name="actions" :items="items" :index="index"></slot> -->
        <BaseIcon @click="editItem(item.keyItem)" href="pencil" class="edit-icon"/>
        <BaseIcon @click="deleteItemStock(index)" href="delete" class="delete-icon"/>
        </tr>
      </tbody>
    </table>
    <button class="validate">Valider</button>
  </div>
</template>

<script>
  import BaseIcon from '@/components/icons/BaseIcon.vue'

export default {
  components: {
    BaseIcon
  },
  props:{
    label:{
      type: String,
      require: true,
    },
  },
  computed: {
    items() {
      return this.$store.itemStock.getters.displayStock
    },
  },

  methods:{
      deleteItemStock(index) {
        // this.$store.itemStock.commit("DELETE_ITEMS_STOCK")
        this.$store.itemStock.dispatch('deleteItems', index)
        console.log(index)
      },

      editItem(keyId){
        console.log(keyId)
        open(this.$router.resolve({name: "item", params: { itemId: keyId },}).href, "_blank");
      }
  }
}
</script>
