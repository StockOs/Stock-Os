<template>
  <div class="home">
    <h1>Home</h1>
    <BaseInput label="Prénom" v-model="firstname" />
    {{ firstname }}
    <BaseCheckbox
      label="maison"
      v-model="isHome"
    />
    <BaseSelect
      label="Listes d'éléments"
      :items="categories"
      v-model="categories.category"
    />
  </div>
</template>

<script>
  import BaseInput from '@/components/BaseInput.vue'
  import BaseCheckbox from '@/components/BaseCheckbox.vue'
  import BaseSelect from '@/components/BaseSelect.vue'

  export default {
    name: 'Home',
    components: {
      BaseInput,
      BaseCheckbox,
      BaseSelect,
    },
    data:() => ({
      firstname: '',
      isHome: true,
      categories: [
        {id: 1, category: 'fruit'},
        {id: 2, category: 'viande'},
        {id: 3, category: 'poisson'},
        {id: 4, category: 'légume'},
        ],
    }),
  }
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>
