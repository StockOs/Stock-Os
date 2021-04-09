<template>
  <div class="base-input-container" :class="{ 'input-error': error }">
      <input
        class="base-input-data"
        :placeholder="placeholder"
        :value="value"
        type="password"
        v-bind="$attrs"
        required
        @input="$emit('input', $event.target.value)"
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
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
    },
  },
}
</script>
