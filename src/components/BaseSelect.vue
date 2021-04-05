<template>
  <div class="select-container">
    <label>{{ label }}</label>
    <select 
      :value="value"
      @change="$emit('input', $event.target.value)"
      v-bind="$attrs"
      class="select-input"
      required
    >
      <option 
        class="select-option"
        v-for="(option,i) in options" 
        :key="i"
        :selected="option === value"
      >
        {{ option[optionLabel] }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props:{
    label:{
      type: String,
      require: true,
    },
    value:{
      default: () => []
    },
    options: {
      default: () => []
    },
    optionLabel: {
      type: String,
      default: 'text'
    }
  },
}
</script>

<style>

</style>