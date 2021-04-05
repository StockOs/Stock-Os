<template>
  <div class="form-input">
    <span
      class="input input-password"
      :class="{ 'input-error': error }"
    >
      <input
        :id="idForLabel"
        class="width-full input"
        :placeholder="placeholder"
        :value="value"
        type="password"
        :required="required"
        @input="$emit('input', $event.target.value)"
      >
    </span>
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
