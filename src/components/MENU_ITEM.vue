<template>
  <a @click="$emit('click')" :class="['item', { selected: selected }]">
    <BaseIcon
      class="icon margin-right-16"
      :href="linkIconSvg"
      :alt="iconDescription"
      aria-hidden="true"
    />
    {{ name }}
  </a>
</template>

<script>
import BaseIcon from "./icons/BaseIcon"

export default {
  name: "MenuItem",
  components: {
    BaseIcon
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    linkIconSvg: {
      type: String,
      default: "",
    },
    iconDescription: {
      type: String,
      default: "",
    },
    selected: {
      type: Boolean,
      default: true,
    }
  }
}
</script>
