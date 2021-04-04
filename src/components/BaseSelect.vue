<template>
  <div class="select-container">
    <label>{{ label }}</label>
    <select 
      :value="value"
      @change="$emit('input', $event.target.value)"
      v-bind="$attrs"
      class="select-input"
    >
      <option 
        class="select-option"
        v-for="(option,i) in options" 
        :key="i"
        :selected="option === value"
      >
        {{ option.category }}
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
      type: String,
      require: false,
    },
    options: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style>

</style>