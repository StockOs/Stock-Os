<template>
  <div class="base-input-container">
    <input
      class="base-input-data"
      :value="value"
      v-bind="$attrs"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      required
    >
    <label class="base-input-label">
      <span class="base-input-content">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      require: true,
    },
    value: {
      type: [String, Number],
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    }
  },
}
</script>