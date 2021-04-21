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
        <BaseIcon @click="deleteItemStock(item.keyItem)" href="delete" class="delete-icon"/>
        </tr>
      </tbody>
    </table>
    <BaseButton class="validate">Valider</BaseButton>
  </div>
</template>

<script>
  import BaseIcon from '@/components/icons/BaseIcon.vue'
  import BaseButton from '@/components/BaseButton'

export default {
  components: {
    BaseIcon,
    BaseButton,
  },
  props:{
    label:{
      type: String,
      require: true,
    },
  },
    mounted(){
    this.$store.itemStock.dispatch("getItems");
  },
  computed: {
    items() {
      return this.$store.itemStock.getters.displayStock
    },
  },

  methods:{
    deleteItemStock(keyItem) {
      console.log('delete from stockDisplay', keyItem)
      this.$store.itemStock.dispatch('deleteItems', keyItem)
    },

    editItem(keyId){
      open(this.$router.resolve({name: "item", params: { itemId: keyId },}).href, "_blank");
    }
  }
}
</script>
