<template>
  <div>
    <label>{{ label }}</label>
    <select 
      :value="value"
      @change="$emit('input', $event.target.value)"
      v-bind="$attrs"
    >
      <option 
        v-for="(item,i) in items" 
        :key="i"
        :selected="item === value"
      >
        {{ item.category }}
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
    items: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style>

</style>