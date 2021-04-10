<template>
  <div class="home">
    <h1>Home</h1>
    <CardMoneySaved :moneySaved="moneySaved" :timeUnit="timeUnit"/>
    <BaseInput label="Prénom" v-model="firstname" />
    {{ firstname }}
    <BaseCheckbox label="maison" v-model="isHome" />
    <BaseSelect
      label="Listes d'éléments"
      :options="categories"
      option-label="category"
      v-model="categories.category"
    />
    <MultiSelect
      :options="categories"
      display-option="category"
      value-option="id"
      v-model="ingredient"
    />

  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue"
import BaseCheckbox from "@/components/BaseCheckbox.vue"
import BaseSelect from "@/components/BaseSelect.vue"
import MultiSelect from "@/components/MultiSelect.vue"
import CardMoneySaved from '@/components/CardMoneySaved.vue'

export default {
  name: "Home",
  components: {
    BaseInput,
    BaseCheckbox,
    BaseSelect,
    MultiSelect,
    CardMoneySaved,
  },
  data: () => ({
    firstname: "",
    isHome: true,
    categories: [
      { id: 1, category: "fruit" },
      { id: 2, category: "viande" },
      { id: 3, category: "poisson" },
      { id: 4, category: "légume" },
      { id: 5, category: "saumon" },
      { id: 6, category: "pesto" }
    ],
    ingredient: [1, 2, 3, 4],
    moneySaved: 40,
    timeUnit: 'Mois',
  })
}
</script>
