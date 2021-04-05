<template>
  <div class="default-layout">
    <h1>Bonjour</h1>

    <div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  width: 100vw;
  height: 100vh;
}
</style>