<template>
  <div class="stockTable">
    <table>
      <thead class="stockTable-header">
        <tr>
          <th>Nom de l'item</th>
          <th>Quantité</th>
          <th>Prix</th>
          <slot name="actionsTitle"></slot>
        </tr>
      </thead>
      <tbody>
        <tr class="stockTable-item" v-for="(item, index) in items" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}</td>
          <slot name="actions" :items="items"></slot>
        </tr>
      </tbody>
    </table>
    <button class="validate">Valider</button>
  </div>
</template>

<script>

export default {
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
}
</script>
