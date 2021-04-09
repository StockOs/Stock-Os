<template>
  <div class="form-input">
      <input
        :id="idForLabel"
        class="input"
        :class="{ 'input-error': error }"
        :placeholder="placeholder"
        :value="value"
        type="password"
        :required="required"
        @input="$emit('input', $event.target.value)"
      >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number, Array],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    idForLabel: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
    },
  },
}
</script>
