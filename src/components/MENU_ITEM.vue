<template>
  <div>
    <a @click="$emit('click')">
      <div>
        <p>Item</p>
        {{ name }}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  components: {  },
  props: {
    name: {
      type: String,
      default: '',
    },
    linkIconSvg: {
      type: String,
      default: '',
    },
    iconDescription: {
      type: String,
      default: '',
    },
    selected: {
      type: Boolean,
      default: true,
    },
  },
}
</script>