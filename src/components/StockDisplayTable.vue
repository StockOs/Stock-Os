<template>
  <table>
    <thead>
      <tr>
        <th>Nom de l'item</th>
        <th>Quantité</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </tbody>
  </table>
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

<style>

</style>