<template>
  <div class="base-input-container">
    <input
      class="base-input-data"
      :value="value"
      v-bind="$attrs"
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
      require: true
    },
    value: {
      type: [String, Number],
      require: true,
    },
  },
}
</script>

<style lang="scss">
  .base-input {
    color: #283044;
    padding: 16px;
    border: none;
    border-bottom: 2px solid #283044;
    width: 18rem;

    &:focus{
      outline: none;
      color: #4285F4;
    }
  }
</style>