<template>
  <div id="app">
    <Icons />
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Icons from "./components/icons/Icons"

const default_layout = "default"
export default {
  components: {
    Icons
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout"
    },
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
