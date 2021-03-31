<template>
  <div class="home">
    <h1>Home</h1>
    <BaseInput label="Prénom" v-model="firstname"/>
    {{ firstname }}
    <BaseCheckbox label="maison" v-model="isHome"/>
  </div>
</template>

<script>
  import BaseInput from '@/components/BaseInput.vue'
  import BaseCheckbox from '@/components/BaseCheckbox.vue'

  export default {
    name: 'Home',
    components: {
      BaseInput,
      BaseCheckbox
    },
    data:() => ({
      firstname: '',
      isHome: true,
    }),
  }
</script>
