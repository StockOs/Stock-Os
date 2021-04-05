<template>
  <div class="checkbox-wrapper">
    <input 
      class="checkbox-input"
      type="checkbox"
      v-bind="$attrs"
      :checked="value"
      @change="$emit('input', $event.target.checked)"
    >
    <label class="checkbox-label">{{ label }}</label>
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