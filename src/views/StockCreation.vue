<template>
  <main>
    <h1>Création du stock</h1>
    <div class="content">
    <ItemCreation @addItemStock='emitItemStock'/>
    <div class="table">
      <p v-for="(item,i) in items" :key="i">
        {{ item.name }}
        {{ item.quantity }}
        {{ item.price }}
      </p>
    </div>
    </div>
  </main>
</template>

<script>
  import ItemCreation from '@/components/ItemCreation.vue'


  export default {
    components: {
      ItemCreation,
    },
    computed: {
      items() {
        return this.$store.itemStock.state.itemsStock
      },
    },
    methods: {
      emitItemStock(item) {
        return this.$store.itemStock.commit("addItemStock", item)
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