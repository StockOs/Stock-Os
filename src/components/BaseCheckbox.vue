<template>
  <div>
    <label>{{ label }}</label>
    <input 
      type="checkbox"
      v-bind="$attrs"
      :checked="value"
      @change="$emit('input', $event.target.checked)"
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
      type: [Boolean, Number],
      require: false,
    },
  },
}
</script>

<style>

</style>