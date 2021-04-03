<template>
  <div class="default-test">
    <h1>Bonjour</h1>

    <div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-test {
  width: 100vw;
  height: 100vh;
  background-color: blue;
}
</style>