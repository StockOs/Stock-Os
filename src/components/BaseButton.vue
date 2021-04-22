<template>
  <button
    class="base-button"
    v-on="$listeners"
    v-if="isButtonDisplayed"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    isButtonDisplayed: {
      type: Boolean,
      default: true,
    },
  }
}
</script>
