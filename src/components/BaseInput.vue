<template>
  <div>
    <label>{{ label }}</label>
    <input 
      type="text" 
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      require: true
    },
    value: {
      type: [String, Number],
      require: true,
    },
  },
}
</script>

<style>

</style>