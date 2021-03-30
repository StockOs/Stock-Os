<template>
  <div class="home">
    <h1>Home</h1>
    <BaseInput label="Prénom" v-model="firstname"/>
    {{ firstname }}
  </div>
</template>

<script>
  import BaseInput from '@/components/BaseInput.vue'

  export default {
    name: 'Home',
    components: {
      BaseInput,
    },
    data:() => ({
      firstname: '',
    }),
  }
</script>
